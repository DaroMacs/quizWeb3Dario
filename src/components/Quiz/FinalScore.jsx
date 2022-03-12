import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const FinalScore = ({score, dataQuiz, answers, handleDisconnect}) => {
    
    const answersObj = answers.map(answer => answer.answer);

    return (

        <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            mt={10}
            alignItems="center"
            height="100vh"
        >
            <Card sx={{ width: 600 }} >
                
                <CardContent >
                    <Typography gutterBottom variant="h4" component="div" color="text.primary">
                        Score Results 
                    </Typography>
                    <Typography variant="h5" color="teal">
                        Points {score} out of {dataQuiz.length}
                    </Typography>
                    <Typography variant="h6" color="gray">
                        Your answers:
                    </Typography>

                    {answersObj.map((answer, i) => (
                        <Typography display="flex" variant="h6" m=".3rem 2rem" color="black" textAlign="left" sx={{ fontSize: '16px' }} key={i}>
                            <Typography variant="p" fontWeight='bold' >Q{i + 1}:&nbsp;</Typography>
                            {answer.answerSelected !== undefined ? (
                                `${answer.answerSelected} - ${answer.isCorrect ? 'Correct' : 'Incorrect'}`
                            ) : (
                                'No answer selected')}
                        </Typography>
                    ))}
                </CardContent>
                        
                <Box display="flex" flexDirection="column" justifyContent="center" pb={2} paddingX={2}>
                    <Button variant="contained" size="small" color="primary" sx={{ textTransform: 'none', marginBottom: '0.5rem' }}>
                        Submit
                    </Button>
                    <Button  onClick={handleDisconnect} variant="contained" size="small" color="warning" sx={{ textTransform: 'none' }}>
                        Exit
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

export default FinalScore;