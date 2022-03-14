import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioFormControl = (
    {
        currentQuestion,
        dataQuiz,
        setAnswer,
    }
) => {

    const handleRadioButton = (idAnswer, answerSelected) => {

        const answerUserObject = {
            idAnswer,
            answerSelected
        };
        
        setAnswer(answerUserObject);
    };


    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Select answer:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {dataQuiz[currentQuestion].choices.map((choice) => {
                    return (
                        <FormControlLabel
                            key = {choice.id} 
                            value={choice.text} 
                            control={<Radio />} 
                            label={choice.text}
                            onChange={(e) => handleRadioButton(choice.id, e.target.value)}
                        />                            
                    );})}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioFormControl;