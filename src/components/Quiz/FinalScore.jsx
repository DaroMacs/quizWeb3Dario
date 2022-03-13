import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ChipCustom from '../../utils/CustomChip';
import CustomAlert from '../../utils/CustomAlert';

const FinalScore = ({ answers, disconnect}) => {
    
    const answersObj = answers.map(answer => answer.answer);
    const completedAnswers = answersObj.filter(answer => answer.idAnswer !== 0);
    console.log(answers);
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
                    <Typography gutterBottom variant="h4" component="div" color="teal">
                        Results 
                    </Typography>
                    <Typography variant="h6" color="gray">
                        Answered {completedAnswers.length}/{answersObj.length}:
                    </Typography>

                    {answersObj.map((answer, i) => (
                        <Typography display="flex" variant="h6" m=".3rem 2rem" color="black" textAlign="left" sx={{ fontSize: '16px' }} key={i}>
                            <Typography variant="p" fontWeight='bold' >Q{i + 1}:&nbsp;</Typography>
                            {answer.answerSelected !== undefined ? (
                                answer.answerSelected
                            ) : (
                                'No answer selected')}
                        </Typography>
                    ))}
                </CardContent>
                        
                <Box display="flex" flexDirection="column" justifyContent="center" pb={2} paddingX={2}>
                    {completedAnswers.length >= 5 ? (
                        <>
                            <CustomAlert _severity={'success'} message={'Congratulations, you have completed the survey, click submit to get your token!'} />
                            <Button variant="contained" size="small" color="primary" sx={{ textTransform: 'none', marginBottom: '0.5rem' }}>
                                Submit
                            </Button>
                        </>
                    ) : (
                        
                        <CustomAlert message={'Sorry, you should answer at least 5 questions in order to get a $QUIZ token.'} />
                    )}
                    
                    <Button  onClick={disconnect} variant="contained" size="small" color="warning" sx={{ textTransform: 'none' }}>
                        Exit
                    </Button>
                </Box>
            </Card>
            <ChipCustom score={completedAnswers.length >= 5 ? 1 : 0}/>
        </Box>
    );
};

export default FinalScore;