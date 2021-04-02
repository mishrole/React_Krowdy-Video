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

    const updateUrlAnswer = (questions, questionId, videoUrl) => {
        
        // const data = questions[0];
        // const { data } = questions;

        // setState(produce(draft => {
        //     const question = draft.find(({  id }) =>  id === questionId);
        //     question.answerUrl = videoUrl;
        // }))

        // setState((test) =>
        
        //     produce(test, (draftQuestions) => {
        //         // console.log(draftQuestions)

        //         const question = draftQuestions.find(({  id }) =>  id === questionId);
        //         question.answerUrl = videoUrl;
        //     })
        // );

        const { data } = questions;

        setState(() => {
            produce(data, draft => {
                const question = draft.find(({  id }) =>  id === questionId);
                question.answerUrl = videoUrl;
            })
        })
    };

    return { state, updateUrlAnswer };
}
