import React, { useState, useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz/Quiz';
import Background from './components/Background';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from './config/web3';
import useTruncatedAddress from './components/customHooks/useTruncatedAddress';

const App = () => {

    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const {active, activate, deactivate, account, error} = useWeb3React();

    const isUnsupportedChain = error instanceof UnsupportedChainIdError;

    useEffect(() => {
        if(active) {
            setIsWalletConnected(true);
        } else {
            setIsWalletConnected(false);
        }
    }, [active]);

    const connect = () => {
        activate(connector);
    };
    
    const disconnect = () => {
        const isConfirmed = confirm('Are you sure you want to disconnect your wallet?');
        if(isConfirmed)deactivate(connector);
        location.reload();
    };

    

    const changeNetwork = async ({ setError }) => {
        try {
            if (!window.ethereum) throw new Error('No crypto wallet found');
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: '0x4', // hex of Ropsten
                    }
                ]
            });
        } catch (err) {
            setError(err.message);
        }
    };

    const truncatedAddress = useTruncatedAddress(account);

    return (
        <>  
            <Background />
            <Navbar 
                active = {active}
                truncatedAddress = {truncatedAddress}
                connect = {connect}
            />
            {isWalletConnected ? (
                <Quiz 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                    disconnect = {disconnect}
                />
            ):(      
                <ConnectWallet 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                    connect = {connect}
                    isUnsupportedChain = {isUnsupportedChain}
                    changeNetwork = {changeNetwork}
                    disconnect = {disconnect}
                />
            )
            }
        </>
    );
};

export default App;

