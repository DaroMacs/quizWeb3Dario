import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea} from '@mui/material';
import blockImg from '../../images/cubes.jpeg';
import RadioFormControl from './RadioFormControl';
import { useTimer } from 'use-timer';
import ChipCustom from '../../utils/CustomChip';



export default function QuestionCards(
    {
        dataQuiz,
        setCurrentQuestion, 
        currentQuestion, 
        score, 
        setScore,
        setShowFinalResults,
        answers,
        setAnswers,
        disconnect
    }) 
{
    const [answer, setAnswer] = useState({});
    const { time, start, reset, } = useTimer({
        initialTime: 5,
        endTime: 0,
        timerType: 'DECREMENTAL',
    });

    useEffect(() => {
        start();
    }, []);
    

    useEffect(() => {
        if(time === 0) {
            nextClickHandler();
        }
    }, [time]);
    

    const nextClickHandler = () => {
        reset();
        start();     
        const currentSelection = dataQuiz[currentQuestion];
        if(Object.keys(answer).length === 0){
            const answerUserObject = {
                currentSelection, 
                answer: {
                    idAnswer: 0,
                    answerSelected: 'No Selected'
                }};

            setAnswers([ ...answers, answerUserObject]);
        } else {
            const answersObject = { currentSelection, answer };
            setAnswers([ ...answers, answersObject]);
        }

        if(currentQuestion + 1 < dataQuiz.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowFinalResults(true);
        }
        setAnswer({});
    };  

    return (        
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            mt={10}
            alignItems="center"
            height="100vh"
        >
            <Card sx={{ width: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="120"
                        image={blockImg}
                        alt="block"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" color="text.primary">
                            Question {currentQuestion + 1}/{dataQuiz.length}
                        </Typography>
                        <Typography variant="h5" color="teal">
                            {dataQuiz[currentQuestion].question}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <RadioFormControl 
                    currentQuestion = {currentQuestion}
                    setCurrentQuestion = {setCurrentQuestion}
                    dataQuiz = {dataQuiz}
                    score = {score}
                    setScore = {setScore}
                    setShowFinalResults = {setShowFinalResults}
                    setAnswer = {setAnswer}
                    answers = {answers}
                    setAnswers = {setAnswers}             
                />
                <Box display="flex" flexDirection="row" justifyContent="space-between" p={2}>
                    <Button  onClick={disconnect} variant="contained" size="small" color="warning" sx={{ textTransform: 'none' }}>
                        Exit
                    </Button>
                    <Typography fontWeight='bold' color='teal'>Remaining time: {time}s</Typography>
                    <Button onClick={nextClickHandler} variant="contained" size="small" color="primary" sx={{ textTransform: 'none' }}>
                        Next 
                    </Button>
                </Box>
            </Card>
            <ChipCustom score={0}/>

        </Box> 
    );
}