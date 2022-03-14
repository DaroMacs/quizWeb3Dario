import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea} from '@mui/material';
import banner from '../../images/CuTu-blogweb3.builders.hope.to.fix.jpg';

export default function Welcome({handleQuizStarted, disconnect}) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            mt={10}
            height="100vh"
        >
            <Card sx={{ maxWidth: 500}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={banner}
                        alt="geometric"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Welcome to the daily Quiz
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The survey of today is about use of Web, so get ready! :)                
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            You have 5 seconds per question
                            One completed at least 5, you&apos;ll see the $Quiz Token reward below the final scores and you&apos;ll get them once summited
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box display="flex" flexDirection="row" justifyContent="space-between" p={2}>
                    <Button  onClick={disconnect} variant="contained" size="small" color="warning" sx={{ textTransform: 'none' }}>
                        I&apos;ll come tomorrow
                    </Button>
                    <Button  onClick={handleQuizStarted} variant="contained" size="small" color="primary" sx={{ textTransform: 'none' }}>
                    Start Quiz
                    </Button>
                </Box>
            </Card>
        </Box>      
    );
}

// import React from 'react';

// const Welcome = () => {
//     return (
//         <div>Quiz</div>
//     );
// };

// export default Welcome;