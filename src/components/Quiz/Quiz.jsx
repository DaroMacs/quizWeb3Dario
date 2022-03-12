import React, { useState, useEffect } from 'react';
import QuestionCards from './QuestionCards';
import Welcome from './Welcome';
import quizJson from '../../data/quiz.json';
import FinalScore from './FinalScore';

const Quiz = ({isWalletConnected, setIsWalletConnected, account}) => {

    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [dataQuiz, setDataQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinalResults, setShowFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleDisconnect = () => {
        setIsWalletConnected(false);
    };
    
    const handleQuizStarted = () => {
        setIsQuizStarted(true);
    };

    useEffect(() => {
        const data = quizJson.questions;
        setDataQuiz(data);
    }, []);
    

    return (
        <>
            {isQuizStarted ? (
                
                showFinalResults ? (
                    <FinalScore 
                        dataQuiz = {dataQuiz}   
                        score = {score}
                        answers = {answers}
                        handleDisconnect = {handleDisconnect}
                    />
                ) : (<QuestionCards 
                    setIsQuizStarted = {setIsQuizStarted}
                    handleDisconnect = {handleDisconnect}
                    currentQuestion = {currentQuestion}
                    setCurrentQuestion = {setCurrentQuestion}
                    dataQuiz = {dataQuiz}
                    score = {score}
                    setScore = {setScore}
                    setShowFinalResults = {setShowFinalResults}
                    answers = {answers}
                    setAnswers = {setAnswers}
                />)
            ): (
                <Welcome 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                    handleDisconnect = {handleDisconnect}
                    handleQuizStarted = {handleQuizStarted}
                    isQuizStarted = {isQuizStarted}
                    setIsQuizStarted = {setIsQuizStarted}
                    account = {account}
                />
            )}
        </>
    );
};

export default Quiz;