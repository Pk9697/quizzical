import React from 'react'
import Start from './components/Start'
import QuizList from './components/QuizList'
function App() {
  const [isQuizStarted,setIsQuizStarted]=React.useState(false)
  function startQuiz(){
    setIsQuizStarted(prevState=>!prevState)
  }
  return (
    <div className='App'>
      {isQuizStarted?
      <QuizList/>
      :
      <Start startQuiz={startQuiz}/>
      }
    </div>
  )
}

export default App
