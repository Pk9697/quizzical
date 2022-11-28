import React from 'react'

export default function Quiz(props) {
    function getRandomAnswers(){
        const answers=props.incorrect_answers
        const correctAnswer=props.correct_answer
        const randomIndex=Math.floor(Math.random()*(answers.length+1))
        // console.log(randomIndex)
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
    const answerElements=getRandomAnswers().map((answer,index)=>{
        return <button key={index}>{answer}</button>
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
