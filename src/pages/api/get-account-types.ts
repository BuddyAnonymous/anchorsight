import type { NextApiRequest, NextApiResponse } from "next";
import type { Idl } from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Connection } from "@solana/web3.js";
import fs from "fs/promises";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const IDL_PATH = process.env.IDL_PATH; // Ensure this is set in your environment variables
    const RPC_URL = process.env.RPC_URL; // Ensure this is set in your environment variables

    if (!IDL_PATH || !RPC_URL) {
      return res
        .status(400)
        .json({ error: "IDL_PATH or RPC_URL is not defined", IDL_PATH, RPC_URL });
    }

    const absolutePath = path.resolve(IDL_PATH);
    const fileContents = await fs.readFile(absolutePath, "utf-8");

    // res.status(200).json({ data: fileContents });

    const accountTypes = extractAccountsDefinition(JSON.parse(fileContents) as Idl);

    res.status(200).json({
      accountTypes,
    });
  } catch (error) {
    console.error("Error reading IDL file:", error);
    res.status(500).json({ error: "Failed to read IDL file" });
  }
}


interface Account {
  name: string;
  discriminator: number[];
}

interface Field {
  name: string;
  type: any;
}

interface TypeDef {
  kind: string;
  fields: Field[];
}

interface TypeEntry {
  name: string;
  type: TypeDef;
}

function extractAccountsDefinition(idl: Idl): { [key: string]: TypeDef } {
  const accountTypes: { [key: string]: TypeDef } = {};

  const allTypes = idl.types;
  const allTypesMap = new Map<string, TypeDef>();
  allTypes.forEach((type: TypeEntry) => {
    allTypesMap.set(type.name, type.type);
  });

  // Recursive function to resolve a type reference.
  function resolveType(fieldType: any): any {
    // Primitive types (e.g., "u8", "f32")
    if (typeof fieldType === "string") {
      return fieldType;
    }

    // If the type is a user-defined reference (e.g., { defined: { name: "I80F48" } })
    if (fieldType.defined) {
      const definedName = fieldType.defined.name;
      const resolved = allTypesMap.get(definedName);
      if (!resolved) {
        throw new Error(`Type "${definedName}" is not defined in the type map.`);
      }
      // Recursively resolve the referenced type.
      return resolveType(resolved);
    }

    // If it's a vector type (e.g., { vec: { defined: { name: "TokenEquity" } } })
    if (fieldType.vec) {
      // Resolve inner type. Note: if vec already is a primitive or other form, it still works.
      return { vec: resolveType(fieldType.vec || fieldType.vec) };
    }

    // If it's an array type (e.g., { array: [ "u8", 5 ] })
    if (fieldType.array) {
      const [innerType, length] = fieldType.array;
      return { array: [resolveType(innerType), length] };
    }

    // If it's a structured type (i.e., a struct with fields)
    if (fieldType.kind && fieldType.fields) {
      return {
        kind: fieldType.kind,
        fields: fieldType.fields.map((field: any) => ({
          name: field.name,
          type: resolveType(field.type),
        })),
      };
    }

    // Fallback: return the field type as is.
    return fieldType;
  }

  idl.accounts.forEach((account: Account) => {
    if (allTypesMap.has(account.name)) {
      const rawType = allTypesMap.get(account.name);
      accountTypes[account.name] = resolveType(rawType);
      //   console.log(rawType);
    }
  });

  return accountTypes;
}
