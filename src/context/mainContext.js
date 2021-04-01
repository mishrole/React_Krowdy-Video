import { createContext } from 'react';
import { useQuestions } from '../hooks/useQuestions';

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    
    const { data: questions } = useQuestions();

    return (
        <MainContext.Provider value={ { questions } }>
            { children }
        </MainContext.Provider>
    )
}

export default MainContext;

export { MainContextProvider };