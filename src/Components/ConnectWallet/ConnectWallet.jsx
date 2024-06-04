import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './ConnectWallet.css';

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                } catch (error) {
                    console.error('User denied account access');
                }
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
            } else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };

        loadWeb3();
    }, []);

    const connectWallet = async () => {
        if (window.web3) {
            try {
                const accounts = await window.web3.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
    };

    const truncateAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div id="login-container">
            <button id="connect-wallet" onClick={account ? disconnectWallet : connectWallet}>
                {account ? truncateAddress(account) : 'Connect Wallet'}
            </button>
            {/* {account && <div id="wallet-address">Connected account: {truncateAddress(account)}</div>} */}
        </div>
    );
};

export default ConnectWallet;
