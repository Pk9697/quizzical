import React from 'react'
import Start from './components/Start'
import QuizList from './components/QuizList'
function App() {
  const [isQuizStarted,setIsQuizStarted]=React.useState(false)
  const [categoriesArr,setCategoriesArr]=React.useState([])
  const [formData, setFormData] = React.useState(
        {
            categoryId:"",
            difficulty:"",
            type:""
        }
    )   

  // console.log(formData)
  React.useEffect(()=>{
    fetch('https://opentdb.com/api_category.php')
      .then(res=>res.json())
      .then(data=>setCategoriesArr(data.trivia_categories))
  },[])
  
  function startQuiz(){
    setIsQuizStarted(prevState=>!prevState)
  }

  function handleChange(e){
    const {name,value}=e.target
    setFormData(prevFormData=>(
        {
            ...prevFormData,
            [name]:value
        }
    ))
  }

  return (
    <div className='App'>
      {isQuizStarted?
      <QuizList formData={formData}/>
      :
      <Start formData={formData} handleChange={handleChange} startQuiz={startQuiz} categoriesArr={categoriesArr} />
      }
    </div>
  )
}

export default App
