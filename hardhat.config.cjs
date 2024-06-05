require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
// const { utils } = require("ethers");

const { PRIVATE_KEY, INFURA_PROJECT_ID, INITIAL_OWNER } = process.env;

module.exports = {
  solidity: "0.8.21",
  networks: {
      hardhat: {},
      sepolia: {
        url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
        accounts: [`0x${PRIVATE_KEY}`],
        // Optional: add a logging function to help debug the issue
        loggingEnabled: true
      }
      // Add other network configurations as needed
  }
};

// Verify the address format at the time of configuration
// const initialOwner = INITIAL_OWNER;
// if (!utils.isAddress(initialOwner)) {
//     throw new Error(`Invalid address in .env: ${initialOwner}`);
// }
// console.log(`Initial owner address is valid: ${initialOwner}`);