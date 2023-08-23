import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Style from "./GameOver.module.css"
import BotaoMain from "./BotaoMain"



const GameOver = (props) => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="gameover" className={Style.ContainerOver}>
        <h2 className={Style.TextoOver}>Fim de jogo</h2>
        <span className={Style.Score}>Potuação: {quizState.score}</span>
        <span className={Style.ScoreDados}>Você acertou {quizState.score} de {quizState.questions.length} questões</span>
        <div className={Style.botao}>
          <BotaoMain name = "Reiniciar" funcao = {()=>{dispatch({type : "NEW_GAME"})}} />
        </div>
    </div>
  )
}

export default GameOver