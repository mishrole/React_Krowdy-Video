import { useState, useEffect } from 'react';
import { getQuestions } from '../helpers/getQuestions';

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
    }, [])

    return state;
}
