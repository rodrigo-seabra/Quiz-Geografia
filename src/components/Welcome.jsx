import Style from "./Welcome.module.css"
import BotaoMain from "./BotaoMain"
import { QuizContext } from "../context/quiz"
import { QuizProvider } from "../context/quiz"
import { useContext } from "react"
import video from "../img/videoback.mp4"

const Welcome = () => {
  
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={Style.content}>
        <video
          style={{ margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={video}
        />
        <div className={Style.organizador}>
            <h2>Seja bem-vindo</h2>
            <h3>Ao melhor Quiz sobre a caatinga</h3>
            <p>Clique no botão abaixo para começar :</p>
            
            <BotaoMain name = "Iniciar" funcao = {()=>{dispatch({type : "CHANGE_STATE"})}}/>
        </div>
    </div>
  )
}

export default Welcome