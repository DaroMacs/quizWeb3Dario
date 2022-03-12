import React, { useState, useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz/Quiz';
import Background from './components/Background';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from './config/web3';

const App = () => {

    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const {active, activate, account, error, chainId} = useWeb3React();

    const isUnsupportedChain = error instanceof UnsupportedChainIdError;

    console.log(chainId);

    const connect = () => {
        activate(connector);
    };

    console.log(active);
    
    useEffect(() => {
        if(active) {
            setIsWalletConnected(true);
        } else {
            setIsWalletConnected(false);
        }
    }, [active]);
    

    return (
        <>  
            <Background />
            <Navbar 
                account = {account}
            />
            {isWalletConnected ? (
                <Quiz 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                />
            ):(      
                <ConnectWallet 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                    connect = {connect}
                    isUnsupportedChain = {isUnsupportedChain}
                />
            )
            }
        </>
    );
};

export default App;

