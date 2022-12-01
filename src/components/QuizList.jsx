import React from 'react'
import Quiz from './Quiz'
export default function QuizList() {

  const [quizData,setQuizData]=React.useState([])
  const [showAnswer,setShowAnswer]=React.useState(false)
  const [apiCall,setApiCall]=React.useState(true)
  const [countCorrectAnswers, setCountCorrectAnswers] = React.useState(0);

  // console.log("QuizList comp rendered")
  console.log(quizData)
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
  },[apiCall])

  React.useEffect(() => {
    let correctAnswers = 0;
    quizData.forEach((quiz) => {
      if (quiz.selectedAnswer === quiz.correct_answer) {
        correctAnswers++;
      }
    });
    setCountCorrectAnswers(correctAnswers);
  }, [quizData]);


  function selectAnswer(id,answer){

    if(!showAnswer){
      console.log(id,answer)
      setQuizData(prevState=>(
        prevState.map(quiz=>{
          return quiz.id===id?{...quiz,selectedAnswer:answer}:quiz
        })
      ))
    }
  }

  function check(){
    setShowAnswer(prevState=>!prevState)
  }

  function reset(){
    setApiCall(prevState=>!prevState)
    setShowAnswer(prevState=>!prevState)
  }

  // console.log(quizData)
  return (
    <div className='quiz--list'>
        <div>
          {
            quizData.map(quiz=>{
              return <Quiz key={quiz.id} {...quiz} selectAnswer={selectAnswer} showAnswer={showAnswer} apiCall={apiCall}/>
            })
          }
        </div>
        <div className='quiz--info'>
          {showAnswer && <h5>You scored {countCorrectAnswers}/{quizData.length} correct answers</h5>}
          <button onClick={showAnswer?reset:check} className='quiz--check--btn'>{showAnswer ? "Play Again" : "Check Answers"}</button>
        </div>
    </div>

  )
}
