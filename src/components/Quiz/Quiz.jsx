import React, { useState, useEffect } from 'react';
import QuestionCards from './QuestionCards';
import Welcome from './Welcome';
import quizJson from '../../data/quiz.json';
import FinalScore from './FinalScore';

const Quiz = ({isWalletConnected, setIsWalletConnected, account, disconnect}) => {

    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [dataQuiz, setDataQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinalResults, setShowFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    
    const handleQuizStarted = () => {
        setIsQuizStarted(true);
    };

    useEffect(() => {
        const data = quizJson.survey.questions;
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
                        disconnect = {disconnect}
                    />
                ) : (<QuestionCards 
                    setIsQuizStarted = {setIsQuizStarted}
                    currentQuestion = {currentQuestion}
                    setCurrentQuestion = {setCurrentQuestion}
                    dataQuiz = {dataQuiz}
                    score = {score}
                    setScore = {setScore}
                    setShowFinalResults = {setShowFinalResults}
                    answers = {answers}
                    setAnswers = {setAnswers}
                    disconnect = {disconnect}
                />)
            ): (
                <Welcome 
                    isWalletConnected = {isWalletConnected}
                    setIsWalletConnected = {setIsWalletConnected}
                    handleQuizStarted = {handleQuizStarted}
                    isQuizStarted = {isQuizStarted}
                    setIsQuizStarted = {setIsQuizStarted}
                    account = {account}
                    disconnect = {disconnect}
                />
            )}
        </>
    );
};

export default Quiz;