
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import './App.css'

import Welcome from './components/Welcome'
import Questions from './components/Questions'
import GameOver from './components/GameOver'
import Errou from './components/Errou'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=>{
    //embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"})
  }, [])

  return (
    <div className='App'>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Questions/>}
        {quizState.gameStage === "Error" && <Errou/>}
        {quizState.gameStage === "End" && <GameOver/>}

    </div>
  )
}

export default App;
