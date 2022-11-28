import React from 'react'

export default function Quiz(props) {
    // const [answersState,setAnswersState]=React.useState(getRandomAnswers())
    const [shuffleOptions,setShuffleOptions]=React.useState(true)
    React.useEffect(()=>{
        setShuffleOptions(false)
        // setAnswersState(getRandomAnswers())
    },[])
    function getRandomAnswers(){
        const answers=props.incorrect_answers
        const correctAnswer=props.correct_answer
        const randomIndex=Math.floor(Math.random()*(answers.length+1))
        // const randomIndex=0
        console.log(randomIndex)
        const newAnswers=[]
        let idx=0;
        for(let i=0;i<answers.length+1;i++){
            if(i!=randomIndex){
                newAnswers.push(answers[idx++])
            }else{
                newAnswers.push(correctAnswer)
            }
        }
        // console.log(newAnswers)
        return newAnswers
    }

    function handleAnswerClick(answer){
        props.selectAnswer(props.id,answer)

    }
    
    const answerElements=getRandomAnswers().map((answer,index)=>{
        const dynamicClass=props.selectedAnswer===answer?"answer-btn-selected" : "answer-btn"
        let showAnswerClass=""
        if(props.showAnswer){
            showAnswerClass=props.selectedAnswer===answer?props.selectedAnswer===props.correct_answer?"answer-correct" : "answer-incorrect":"answer-btn"
        }
        return <button className={`${dynamicClass} ${showAnswerClass}`} key={index} onClick={()=>handleAnswerClick(answer)}>{answer}</button>
    })
    // console.log(answerElements)
  return (
    <div className='quiz'>
        <h3>{props.question}</h3>
        <div className="quiz--options">
            {answerElements}
        </div>
    </div>
  )
}
