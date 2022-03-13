import React from 'react';
import Button from '@mui/material/Button';
import metamaskImg from '../images/MetaMask_Fox.png';
import { Alert, Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { foxAnimation } from '../variants/variants';


const ConnectWallet = ({connect, isUnsupportedChain, changeNetwork}) => {

    return (
        <Container>
            <Box display="flex" flexDirection="column" mt={10} alignItems= 'center' position="absolute" left={0} right={0}>
                <Button 
                    onClick={isUnsupportedChain ? changeNetwork : connect} 
                    variant="contained" sx={{ textTransform: 'none' }} 
                    color={isUnsupportedChain ? 'warning' : 'primary'}>
                    {isUnsupportedChain ? 'Connect to Ropsten' : 'Connect Wallet'}
                </Button>
                {isUnsupportedChain && 
                    (
                        <Stack spacing={4} mt={2}>
                            <Alert 
                                severity="warning" 
                                sx={{ marginBottom: '1rem' }}
                            >
                                Oops, it seems you are connected to Metamask but not to the right newtwork, click the button to connect to Ropsten.
                            </Alert>
                        </Stack>
                    )}
                <Typography>
                    
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