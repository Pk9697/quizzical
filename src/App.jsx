import React from 'react'
import Start from './components/Start'
import QuizList from './components/QuizList'
function App() {
  const [isQuizStarted,setIsQuizStarted]=React.useState(false)
  const [categoriesArr,setCategoriesArr]=React.useState([])
  const [categoryId,setCategoryId]=React.useState("")
  React.useEffect(()=>{
    fetch('https://opentdb.com/api_category.php')
      .then(res=>res.json())
      .then(data=>setCategoriesArr(data.trivia_categories))
  },[])
  
  function startQuiz(){
    setIsQuizStarted(prevState=>!prevState)
  }

  function handleCategory(id){
    setCategoryId(id)
    // console.log(id)
  }
  return (
    <div className='App'>
      {isQuizStarted?
      <QuizList categoryId={categoryId}/>
      :
      <Start startQuiz={startQuiz} categoriesArr={categoriesArr}  handleCategory={handleCategory}/>
      }
    </div>
  )
}

export default App
