import React from 'react'
import Quiz from './Quiz'
export default function QuizList() {

  const [quizData,setQuizData]=React.useState([])
  const [showAnswer,setShowAnswer]=React.useState(false)
  // console.log("QuizList comp rendered")
  // console.log(quizData)
  React.useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res=>res.json())
      .then(data=>(
        setQuizData(data.results.map((quiz,index)=>{
          return {
            ...quiz,
            id:`quiz-${index}`,
            selectedAnswer:""
          }
        }))
      ))
  },[])

  function selectAnswer(id,answer){
    console.log(id,answer)
    setQuizData(prevState=>(
      prevState.map(quiz=>{
        return quiz.id===id?{...quiz,selectedAnswer:answer}:quiz
      })
    ))
  }
  console.log(quizData)
  return (
    <div className='quiz--list'>
        <div>
          {
            quizData.map(quiz=>{
              return <Quiz key={quiz.id} {...quiz} selectAnswer={selectAnswer} showAnswer={showAnswer}/>
            })
          }
        </div>
        <button onClick={()=>setShowAnswer(prevState=>!prevState)} className='quiz--check--btn'>Check answers</button>
    </div>

  )
}
