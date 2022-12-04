import React from "react";

export default function Start(props){
    
    const optionElements=props.categoriesArr.map(category=>{
        return <option key={category.id} value={category.id}>{category.name}</option>
    })
    
    return (
        <div className="start--div">
            <h1>Quizzical</h1>
            <p>Start quiz when you are ready</p>
            <form className="start--form">
                <label htmlFor="category">Select Category:</label>
                <select value={props.formData.categoryId} id="category" name="categoryId" onChange={props.handleChange}>
                    <option value="">Any Category</option>
                    {optionElements}
                </select>
                <label htmlFor="difficulty">Select Difficulty:</label>
                <select value={props.formData.difficulty} id="difficulty" name="difficulty" onChange={props.handleChange}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label htmlFor="type">Select Type:</label>
                <select value={props.formData.type} id="type" name="type" onChange={props.handleChange}>
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </form>
            <button onClick={props.startQuiz} className="start--btn">Start quiz</button>
        </div>
    )
}