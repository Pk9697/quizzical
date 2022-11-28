import React from "react";

export default function Start(props){
    return (
        <div className="start--div">
            <h1>Quizzical</h1>
            <p>Start quiz when you are ready</p>
            <button onClick={props.startQuiz} className="start--btn">Start quiz</button>
        </div>
    )
}