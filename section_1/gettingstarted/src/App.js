import React, {useEffect, useState} from "react";
import "./App.css"

const App = () => {

  const [ advice, setAdvice] = useState('')
  const [ count, setCount] = useState(0)

  async function getAdvice() { 
    const res = await fetch("https://api.adviceslip.com/advice")
    const {slip} = await res.json()

    setAdvice(slip.advice)
    setCount(count + 1)
    
  } 

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div className="container">
      <blockquote><h1>"{advice}"</h1></blockquote>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read <strong>{count}</strong> pieces of advie</p>
    </div>
  )
}

export default App