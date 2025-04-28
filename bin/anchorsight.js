#!/usr/bin/env node

const { exec } = require("child_process");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option("rpc-url", {
    type: "string",
    description: "Solana RPC URL",
    demandOption: true,
  })
  .option("idl", {
    type: "string",
    description: "Path to the IDL file",
    demandOption: true,
  })
  .help()
  .argv;

console.log("Starting Anchorsight with the following parameters:");
console.log(`RPC URL: ${argv["rpc-url"]}`);
console.log(`IDL Path: ${argv.idl}`);

// Pass the parameters to your app via environment variables
process.env.RPC_URL = argv["rpc-url"];
process.env.IDL_PATH = argv["idl"];

// Start the app
const devProcess = exec("pnpm dev", { env: process.env });

// devProcess.stdout.on("data", async (data) => {
//   process.stdout.write(data);

//   // Check for the "Local:" line and extract the URL
//   const match = data.match(/Local:\s+(http:\/\/[^\s]+)/);
//   if (match) {
//     const url = match[1];
//     console.log(`Opening ${url} in your browser...`);

//     // Dynamically import the 'open' library
//     const { default: open } = await import("open");
//     open(url); // Open the URL in the default browser
//   }
// });
devProcess.stdout.pipe(process.stdout);

devProcess.stderr.pipe(process.stderr);