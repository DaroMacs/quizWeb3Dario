import { Chip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const ChipCustom = ({score}) => {
    return (
        <Box  mt={2}>
            <Chip sx={{ fontSize: 16, p: '1.1rem', border: '1px solid white' }} label={`$QUIZ token: ${score}`} color="primary"></Chip>
        </Box>
    );
};

export default ChipCustom;