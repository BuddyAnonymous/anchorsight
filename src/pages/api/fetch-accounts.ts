import type { NextApiRequest, NextApiResponse } from "next";
import type { Idl } from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Connection } from "@solana/web3.js";
import fs from "fs/promises";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { accountType } = req.query;

    if (!accountType || typeof accountType !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'account' query parameter" });
    }

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

    const allFetched = await getAnchorData(fileContents, RPC_URL, accountType);
    fixArrays(allFetched);

    // MOCK DATA
    res.status(200).json({
      data: allFetched,
    });
  } catch (error) {
    console.error("Error reading IDL file:", error);
    res.status(500).json({ error: "Failed to read IDL file" });
  }
}

function fixArrays(obj) {
  if (Array.isArray(obj)) {
    // Compress trailing runs for this array
    compressTrailingRuns(obj);
    // Recurse into each element
    obj.forEach(fixArrays);

  } else if (obj && typeof obj === 'object') {
    // Traverse each property
    for (const [key, value] of Object.entries(obj)) {
      // Skip compressing `reserved` fields
      if (key !== 'reserved' && Array.isArray(value)) {
        compressTrailingRuns(value);
      }
      // Recurse into value
      fixArrays(value);
    }
  }
}

function compressTrailingRuns(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return;

  const last = arr[arr.length - 1];
  let count = 1;

  // Count how many times `last` repeats at the end
  for (let i = arr.length - 2; i >= 0; --i) {
    if (arr[i] === last) {
      count++;
    } else {
      break;
    }
  }

  // If more than one repetition, replace the run with a single compressed entry
  if (count > 1) {
    const label = `${last} x${count}`;
    // Remove the repeated entries and push the compressed label
    arr.splice(arr.length - count, count, label);
  }
}

async function getAnchorData(idl: string, rpcUrl: string, accountType: string) {
  const IDL = JSON.parse(idl) as Idl;
  //   console.log("IDL", IDL);

  const connection = new Connection(rpcUrl);
  const program = new Program(IDL, { connection });

  // 1. Grab the client for the one account type you want.
  //    We have to convince TS that indexing by a string is OK:
  const clients = program.account as Record<string, any>;
  const client = clients[accountType];
  if (!client || typeof client.all !== "function") {
    throw new Error(`No account client found for type "${accountType}"`);
  }

  const allAccounts = await client.all(); // Array<{ publicKey; account }>
  const cleaned = allAccounts.map(({ publicKey, account }) => ({
    publicKey: publicKey.toBase58(),
    ...account, 
  }));

  console.log("cleaned", cleaned.slice(0, 5));

  return cleaned.slice(0, 5); // Limit to 10 for testing

  // // 1. Get [name, client] pairs for every account type
  // const entries = Object.entries(program.account) as Array<
  //   [keyof typeof program.account, any /* AccountClient<any, any> */]
  // >;

  // // 2. For each client call `.all()` and tag with its name
  // const results = await Promise.all(
  //   entries.map(async ([name, client]) => {
  //     const allAccounts = await client.all(); // Array<{ publicKey; account }>
  //     return [name, allAccounts] as const;
  //   })
  // );

  // // 3. Turn that array of [name, accounts] into a lookup object
  // const allFetched: Record<string, Array<any>> = Object.fromEntries(results);

  // // now `allFetched["mintInfo"]`, `allFetched["otherAccount"]`, etc.
  // const allFetchedString =
  //   "[" +
  //   Object.entries(allFetched)
  //     .map(el => JSON.stringify(el))
  //     .join(",") +
  //   "]";
  // //   const allFetchedString = JSON.stringify(allFetched, null, 2);
  // console.log(allFetchedString);

  // return allFetchedString;
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
