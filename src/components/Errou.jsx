import BotaoMain from './BotaoMain'
import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Style from '../components/Errou.module.css'


const Errou = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className={Style.ContainerErrou}>
        <h2 className={Style.TituloErrou}>Você errou, volte do começo!</h2>
        <BotaoMain name = "Reiniciar" funcao = {()=>{dispatch({type : "NEW_GAME"})}} />
    </div>
  )
}

export default Errou