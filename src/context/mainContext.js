import { createContext } from 'react';
import { useQuestions } from '../hooks/useQuestions';

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    
    const { state: { data: questions }, updateUrlAnswer } = useQuestions();

    return (
        <MainContext.Provider value={ { questions, updateUrlAnswer } }>
            { children }
        </MainContext.Provider>
    )
}

export default MainContext;

export { MainContextProvider };