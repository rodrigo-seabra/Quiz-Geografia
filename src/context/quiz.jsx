import { createContext, useReducer } from "react";
import questions from "../data/question"

const STAGES = ["Start", "Playing", "Error",  "End"]

const initalState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion : 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => 
{
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case "REORDER_QUESTIONS":
                const reorderQuestions = questions.sort(()=>{
                return Math.random() - 0.5;
            }) //algoritimo de reordenação de arrays
            return {
                ...state,
                questions: reorderQuestions
            };
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion +1;
            let endGame = false
            if(!questions[nextQuestion]){
                endGame = true
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
            };
        case "NEW_GAME":
            return initalState;
        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer
            const options = action.payload.options


            let correctAnswer = 0

            if (answer == options){
                correctAnswer = 1
                return{
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelected: options,
                }
    
            }else{
                return{
                    ...state,
                    gameStage: STAGES [2],
                }
            }
        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) =>{
    const value = useReducer(quizReducer, initalState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}