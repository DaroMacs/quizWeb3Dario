import React from 'react';
import Button from '@mui/material/Button';
import metamaskImg from '../images/MetaMask_Fox.png';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { foxAnimation } from '../variants/variants';


const ConnectWallet = ({isWalletConnected, connect, isUnsupportedChain}) => {

    console.log(isWalletConnected);

    // const handleConnected = () => {
    //     setIsWalletConnected(true);
    // };

    return (
        <Container>
            <Box display="flex" flexDirection="column" mt={10} alignItems= 'center' position="absolute" left={0} right={0}>
                <Button onClick={connect} variant="contained" sx={{ textTransform: 'none' }}>
                    Connect Wallet
                </Button>
                <Typography>
                    {isUnsupportedChain && 'Unsupported provider'}
                </Typography>
                <motion.img
                    variants={foxAnimation}
                    animate={foxAnimation.animate} src={metamaskImg} alt="Fox" style={{ height: '350px', marginTop: '2rem' }}>
                </motion.img>
            </Box>
        </Container>     
    );
};

export default ConnectWallet;