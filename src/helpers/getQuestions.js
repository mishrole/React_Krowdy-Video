import {default as UUID} from "uuid";

export const getQuestions = async () => {
    const data = ['¿Cuál es tu animal favorito?','¿Cuál es tu color favorito?', '¿Cuál es tu comida favorita?', '¿Cuál es tu planta favorita?'];

    const questions = data.map(question => {
        return {
            id: UUID.v4(),
            value: question,
            answerUrl: ""
        }
    });

    return questions;
}