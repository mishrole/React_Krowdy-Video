// import produce from 'immer';
import { useState, useEffect } from 'react';
import { getQuestions } from '../helpers/getQuestions';
// import MainContext from '../context/mainContext';

export const useQuestions = () => {
    
    const [state, setState] = useState({
        data: []
    });

    // Get questions + UUID

    useEffect(() => {
        getQuestions()
        .then(question => {
            setState({
                data: question
            })
        })
    }, []);

    // Update Url (context, id, newUrl)

    const updateUrlAnswer = (questions, questionId, videoUrl) => {

        const question = questions.find(({ id }) =>  id === questionId);

        if(question) {
            setState(() => {
                question.answerUrl = videoUrl;
                return { data: Object.assign(questions, question) }
            })
        }

        console.log(state)
    };

    return { state, updateUrlAnswer };
}
