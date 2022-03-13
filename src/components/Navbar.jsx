import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import metamaskImg from '../images/MetaMask_Fox.png';

export default function Navbar({account, connect}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ marginBottom: '2rem', height: '4rem', backgroundColor: 'rgba(67, 54, 54, 0.4)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web3.Token.Quiz
                    </Typography>
                    <Button 
                        onClick={connect}
                        color="inherit" sx={{ flexGrow: 1, height: '3rem' }}
                    >
                        <img src={metamaskImg} alt="Fox" style={{ height: '40px', marginRight: '1rem' }} />
                        <Typography>{account}</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
