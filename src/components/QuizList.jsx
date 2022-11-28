import React from 'react'
import Quiz from './Quiz'
export default function QuizList() {
  return (
    <div className='quiz--list'>
        <div>
          <Quiz/>
          <Quiz/>
          <Quiz/>
          <Quiz/>
          <Quiz/>
        </div>
        <button className='quiz--check--btn'>Check answers</button>
    </div>

  )
}
