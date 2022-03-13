import React from 'react';
import { Alert, Stack } from '@mui/material';


const CustomAlert = ({message , _severity = 'warning'}) => {
    return (
        <Stack spacing={4} mt={2}>
            <Alert 
                severity={_severity} 
                sx={{ marginBottom: '1rem' }}
            >
                {message}
            </Alert>
        </Stack>
    );
};

export default CustomAlert;