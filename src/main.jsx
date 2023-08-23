import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QuizProvider } from './context/quiz.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
  <App />
  </QuizProvider>,
);
