import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import { QuizProvider } from '../context/quiz';

import Style from "./Questions.module.css"
import BotaoMain from './BotaoMain';
import Options from './Options';


function Questions ()
{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    const onSelectOption = (options) =>{
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, options}
        })
    }

    return(
        <div className={Style.conteiner}>
            <div className={Style.content}>
            <span className={Style.NumeroPergunta}>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</span>
            <h2 className={Style.Pergunta}>{currentQuestion.question}</h2>
            <div id="options-container" className={Style.opcoes}>
                {currentQuestion.options.map((options) => [
                    <Options 
                    options={options} 
                    key={options} 
                    answer = {currentQuestion.answer}
                    selectOption = {() => {onSelectOption(options)
                    }} //option é enviada como argumento para saber qual opção o user clicou
                    
                    />
                ])}
            </div>
                {quizState.answerSelected && <BotaoMain name="Continuar" funcao = {()=>{dispatch({type : "CHANGE_QUESTION"})}}/>}
            </div>
        </div>
    )
}

export default Questions;