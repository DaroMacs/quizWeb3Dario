import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import QuizArtifact from '../../../config/web3/artifacts/Quiz';

const {address, abi} = QuizArtifact;

const useQuiz = () => {
    const { active, library, chainId } = useWeb3React();

    const quiz = useMemo(() => {
        if (active) return new library.eth.Contract(abi, address[chainId]);
    }, [active, chainId, library?.eth?.Contract]);

    return quiz;
};

export default useQuiz;