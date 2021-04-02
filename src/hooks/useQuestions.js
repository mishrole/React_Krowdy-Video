import produce from 'immer';
import { useState, useEffect, useContext } from 'react';
import { getQuestions } from '../helpers/getQuestions';
import MainContext from '../context/mainContext';

export const useQuestions = () => {
    
    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        getQuestions()
        .then(question => {
            setState({
                data: question
            })
        })
    }, []);

    // Error

    const updateUrlAnswer = (questions, questionId, videoUrl) => {

        const question = questions.find(({ id }) =>  id === questionId);

        if(question) {
            setState(() => {
                question.answerUrl = videoUrl;
                const returnedTest = Object.assign(questions, question);
                return {data: returnedTest}
            })
        }
    };

    return { state, updateUrlAnswer };
}
