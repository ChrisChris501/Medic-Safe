import React, { useState } from 'react';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import MedicalNFT from '../../../artifacts/contracts/Test.sol/MedicalNFT.json'; // Adjust the path according to your project structure

const ipfs = create('https://ipfs.infura.io:5001/api/v0');

const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';

function UploadAndMintNFT() {
  const [file, setFile] = useState(null);
  const [patientData, setPatientData] = useState('');
  const [status, setStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePatientDataChange = (event) => {
    setPatientData(event.target.value);
  };

  const handleUpload = async () => {
    try {
      // Upload file to IPFS
      const addedFile = await ipfs.add(file);
      const fileHash = addedFile.path;

      // Create metadata
      const metadata = {
        description: patientData,
        file: fileHash,
      };

      // Upload metadata to IPFS
      const addedMetadata = await ipfs.add(JSON.stringify(metadata));
      const metadataHash = addedMetadata.path;

      // Mint NFT
      await mintNFT(metadataHash);

      setStatus('Upload and mint successful!');
    } catch (error) {
      console.error('Error uploading file: ', error);
      setStatus('Error uploading file.');
    }
  };

  const mintNFT = async (metadataHash) => {
    if (!window.ethereum) {
      console.error('MetaMask is not installed');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, MedicalNFT.abi, signer);

    try {
      const transaction = await contract.createMedicalNFT(await signer.getAddress(), `ipfs://${metadataHash}`);
      await transaction.wait();
    } catch (error) {
      console.error('Error minting NFT: ', error);
    }
  };

  return (
    <div>
      <h1>Upload Medical Record and Mint NFT</h1>
      <input type="file" onChange={handleFileChange} />
      <textarea
        placeholder="Enter patient data"
        value={patientData}
        onChange={handlePatientDataChange}
      ></textarea>
      <button onClick={handleUpload}>Upload and Mint NFT</button>
      <p>{status}</p>
    </div>
  );
}

export default UploadAndMintNFT;
