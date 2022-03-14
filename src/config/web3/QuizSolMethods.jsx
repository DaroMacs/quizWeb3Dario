import { useWeb3React } from '@web3-react/core';
import React, { useCallback, useEffect, useState } from 'react';
import useQuiz from '../../components/customHooks/useQuiz/useQuiz.js';
import { LoadingButton } from '@mui/lab';
import EthIcon from '../../images/ethereumIcon.svg';
import { Typography } from '@mui/material';
import CustomAlert from '../../utils/CustomAlert.jsx';


const quizSolMethods = ({answersToContract}) => {
    const {active, account} = useWeb3React();
    const [coolDown, setCoolDown] = useState();
    const [balanceOfAccount, setBalanceOfAccont] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [gotToken, setgotToken] = useState(false);
    const quiz = useQuiz();
    console.log(isSubmitted);
    if(!active) return 'Connect your wallet'; 

    
    
    const getCoolDown = useCallback(async () => {
        if(quiz) {
            const result = await quiz.methods.cooldownSeconds().call();
            setCoolDown(result);
        }
    }, [quiz]);

    const getBalanceOf = useCallback(async () => {
        if(quiz) {
            const result = await quiz.methods.balanceOf(account).call();
            const resultEthers = Number(result) / 10**18;
            setBalanceOfAccont(resultEthers);
        }

    }, [quiz]);


    useEffect(() => {
        getCoolDown();
    }, [getCoolDown]);
        
    useEffect(() => {
        getBalanceOf();
    }, [getBalanceOf]);    

    const submiting = () => {

        quiz.methods.submit(1,answersToContract).send({from: account})
            .on('transactionHash', (txHash) => {
                setIsSubmitted(true);

                console.log('transaccion enviada', txHash);
            })
            .on('receipt', () => {
                setIsSubmitted(false);

                console.log('transaccion confirmada');
                getBalanceOf();
                setgotToken(true);

            })
            .on('error', (error) => {
                console.log(error.message);

            });
        setIsSubmitted(false);
        setgotToken(false);

    };

    return (
        <>
            {!gotToken ? (
                <CustomAlert _severity={'success'} message={'Thank you, you have completed the survey, click submit to get your token!'} />
            ) : (
                <CustomAlert _severity={'success'} message={'Congratulations, you submitted your results and we have added 1 ether to your balance!'} />
            )}
            <Typography variant='h5' fontSize='20px'>Your $QUIZ toke balance: 
                <Typography fontSize='25px' fontWeight='bold' mb='1rem' color='teal'>
                    {balanceOfAccount}
                    <img src={EthIcon} alt="ether" style={{ height: '20px' }} />
                </Typography>
            </Typography>
            <LoadingButton 
                onClick={submiting} 
                loading={isSubmitted}
                disabled={gotToken}
                variant="contained" 
                size="small" 
                color="primary" 
                sx={{ textTransform: 'none', marginBottom: '0.5rem' }}
            >
                {gotToken ? (
                    `Remember to wait ${coolDown} hours for cooldown time and make another survey`
                ) : (
                    'Submit'
                )
                }
            </LoadingButton>
        </>
    );
};

export default quizSolMethods;