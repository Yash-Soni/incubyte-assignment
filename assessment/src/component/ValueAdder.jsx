import React, { useState } from 'react'

const ValueAdder = () => {
  const [inputText, setInputText] = useState()
  const [numVals, setNumVals] = useState([])
  const [result, setResult] = useState(0)

  // const valueParser = (text) => {

  // }

  const performAddition = () => {
    if(inputText.length == 0) {
      setResult(0)
    }
  }

  return (
    <div>
      <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={performAddition}>Perform Addition</button>
      <p>Answer: {result}</p>
    </div>
  )
}

export default ValueAdder