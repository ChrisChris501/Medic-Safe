import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import './DoctorMedicalUpload.css';
import WhiteLogo from '../../assets/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faUserGraduate, faClock, faUpload, faCalendar, faHandHoldingUsd, faCog, faQuestion, faCloudUpload, faDownload, faSync } from "@fortawesome/free-solid-svg-icons";
import PatientProfileImage from '../../assets/PatientProfileImage.png';

// Initialize Web3
const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Your smart contract ABI and address
const contractABI = [/* Your contract ABI here */];
const contractAddress = 'YOUR_SMART_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(contractABI, contractAddress);

const DoctorMedicalUpload = () => {
  // Reference to the file input element
  const fileInputRef = useRef(null);

  // Function to handle medical upload button click
  const handleMedicalUpload = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const mintNFT = async (fileMetadata) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    
    try {
      await contract.methods.mintNFT(account, fileMetadata).send({ from: account });
      console.log('NFT minted successfully');
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Perform upload logic here
      console.log("Medical upload initiated with file:", file);

      // Create a FormData object to hold the file
      const formData = new FormData();
      formData.append('file', file);

      try {
        // Send the file to the server using fetch (replace 'your-upload-endpoint' with your actual endpoint)
        const response = await fetch('your-upload-endpoint', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully");
          const fileMetadata = { name: file.name, size: file.size, type: file.type }; // Customize as needed
          
          // Mint NFT with file metadata
          await mintNFT(JSON.stringify(fileMetadata));
        } else {
          console.error("File upload failed");
          // Handle upload failure (e.g., show an error message)
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error during upload
      }
    }
  };

  return (
    <div className='TheDoctorProfile'>
      <div className='TheDoctorProfileLinks'>
        <div className="TheProfileLogo">
          <img className="navLogo" src={WhiteLogo} alt="The Medic-Safe Logo" />
        </div>
        <div className='DoctorFirstLinks'>
          <Link to="/DoctorDashboard">
            <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
          </Link>
          <Link to="/DoctorProfile">
            <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
          </Link>
          <Link to="/MedicalHistory">
            <button key="MedicalHistory"><FontAwesomeIcon icon={faClock} /> Medical History</button><br />
          </Link>
          <Link to="/DoctorMedicalUpload">
            <button key="MedicalUpload"><FontAwesomeIcon icon={faUpload} /> Medical Upload</button><br />
          </Link>
          <Link to="/DocumentScanner">
            <button key="DocumentScanner"><FontAwesomeIcon icon={faCalendar} /> Document Scanner</button><br />
          </Link>
        </div>
        <div className='DoctorProfileSecondLinks'>
          <Link to="/Privacy_Security">
            <button key="PrivacyPolicy"><FontAwesomeIcon icon={faHandHoldingUsd} /> Privacy Policy</button><br />
          </Link>
          <Link to="/Settings">
            <button key="Settings"><FontAwesomeIcon icon={faCog} /> Settings</button><br />
          </Link>
          <Link to="/LogOut">
            <button key="Logout"><FontAwesomeIcon icon={faQuestion} /> Logout</button><br />
          </Link>
        </div>
      </div>
      <div className="TheDoctorDetails">
        <div className='SearchDetails'>
          <input
            type="text"
            placeholder="Search"
            className="TextInput"
          />
          <div className='SideBarImage'>
            <img className="PatientProfileImg" src={PatientProfileImage} alt="Doctor Profile Image" />
          </div>
        </div>
        <div className="TheUploadDetails">
          <h1>Dashboard/<h2>Medical Upload</h2></h1>
          <div className='TheUploadWrapper'>
            <div className='History'>
              <h2>Upload History</h2>
              <h2>Medical Data</h2>
              <div className='UploadSection'>
                <FontAwesomeIcon icon={faCloudUpload} className="cloud-icon" />
                <h4>Upload medical history here</h4>
                <h5>Drag and drop <a href=''>here</a> in browser</h5>
                <button key="FileUpload" onClick={handleMedicalUpload}> 
                  Upload file <FontAwesomeIcon icon={faDownload} />
                </button><br />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
              <div className='UploadFooter'>
                <h6>Use third party integration:<a href=''> Use third party integration:</a></h6>
              </div>
            </div>
            <div className='DocUploads'>
              <h2>Uploaded documents</h2>
              <ul>
                <li>Documents <h3>Records</h3></li>
                <li>Scan <h4>6</h4></li>
                <li>X-Ray <h4>2</h4></li>
                <li>Hepatitis <h4>1</h4></li>
                <li>Physical Screening <h6>2</h6></li>
                <li>Biopsy <h4>1</h4></li>
                <li>Pregnancy <h4>2</h4></li>
                <li>Blood Test <h4>1</h4></li>
              </ul>
            </div>
          </div>
          <div className='SaveDoc'>
            <h4><FontAwesomeIcon icon={faSync} /> Saving</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorMedicalUpload;
