import React from "react";

export default function Start(props){

    // const [formData, setFormData] = React.useState(
    //     {
    //         categoryId:""
    //     }
    // )    
    // console.log(formData)
    function handleChange(e){
        const {value}=e.target
        // setFormData(prevFormData=>(
        //     {
        //         ...prevFormData,
        //         [name]:value
        //     }
        // ))
        props.handleCategory(value)
    }

    const optionElements=props.categoriesArr.map(category=>{
        return <option key={category.id} value={category.id}>{category.name}</option>
    })
    
    return (
        <div className="start--div">
            <h1>Quizzical</h1>
            <p>Start quiz when you are ready</p>
            <form className="start--form">
                <label htmlFor="category">Select Category:</label>
                <select id="category" name="categoryId" onChange={handleChange}>
                    <option value="">Any Category</option>
                    {optionElements}
                </select>
            </form>
            <button onClick={props.startQuiz} className="start--btn">Start quiz</button>
        </div>
    )
}