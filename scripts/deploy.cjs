require("dotenv").config();

// import { ethers } from "hardhat";

// async function main() {
//     // Retrieve the contract factory for MedID
//     const MedID = await ethers.ContractFactory("MedID");

//     // Specify the initial owner address from environment variables
//     const initialOwner = process.env.INITIAL_OWNER;

//     // Validate the initial owner address and log it for debugging
//     if (!utils.isAddress(initialOwner)) {
//         throw new Error(`Invalid initial owner address: ${initialOwner}`);
//     }
//     console.log(`Deploying MedID with initial owner: ${initialOwner}`);

//     // Validate the initial owner address
//     const validatedAddress = ethers.utils.getAddress(initialOwner);

//     // Deploy the contract with the validated initial owner
//     const medID = await MedID.deploy(validatedAddress);

//     // Wait for the deployment transaction to be mined
//     await medID.deployed();

//     // Output the address of the deployed contract
//     console.log(`MedID deployed to: ${medID.address}`);
// }

// Execute the main function and handle errors
// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error("Deployment failed:", error);
//         process.exit(1);
//     });

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  //   const initialOwner = process.env.INITIAL_OWNER;

  //   const validatedAddress = ethers.utils.getAddress(initialOwner);

  const Contract = await hre.ethers.getContractFactory("MedicalNFT"); // Ensure this name matches your contract
  const contract = await Contract.deploy(deployer.address);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
