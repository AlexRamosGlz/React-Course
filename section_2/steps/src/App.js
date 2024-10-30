import React, { Children, useState } from "react";


function App() {

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step <= 1) return

    setStep(step - 1)
  }

  function handleNext() {
    if (step >= 3) return

    setStep(step + 1)
  }

  function handleClose() {
    setIsOpen(!isOpen)
  }

  function Content() {
    return (<div className="steps">
      <ul className="numbers">
        <li className={`${step >= 1 ? "active" : " "}`}>1</li>
        <li className={`${step >= 2 ? "active" : " "}`}>2</li>
        <li className={`${step >= 3 ? "active" : " "}`}>3</li>
      </ul>

      <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>

      <div className="buttons">


        <Button onClick={handlePrevious}><span>👈</span> Left</Button>
        <Button onClick={handleNext}>Next <span>👉</span></Button>


      </div>
    </div>)
  }

  return (
    <>
      <button className="close" onClick={handleClose}>&times;</button>
      {isOpen && <Content />}
    </>
  );
}

export default App;

function Button({ classSelector, onClick, children }) {
  return (
    <button className={classSelector} onClick={onClick}>
      {children}
    </button>
  )
}