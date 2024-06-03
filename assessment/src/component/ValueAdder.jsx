import { isNumber } from 'lodash'
import React, { useState } from 'react'
import { useEffect } from 'react'

const ValueAdder = () => {
  const [inputText, setInputText] = useState()
  const [numVals, setNumVals] = useState([])
  const [result, setResult] = useState(0)
  const [delimiter, setDilimiter] = useState(',')
  const newLineChar = '\n'

  useEffect(() => {
    performOperation()
    // setInputText()
  }, [numVals])

  // const checkNumber = (char) =>  ('0'.charCodeAt() <= char.charCodeAt() && '9'.charCodeAt() >= char.charCodeAt())

  const isNumber = (value) => !isNaN(value)

  const valueParser = () => {
    if(inputText.length === 0) {
      setResult(0)
      return
    }
    let num='', numbers=[]
    console.log('splitted array: ', inputText.split(delimiter));
    inputText.split(delimiter).map((chars, index) => {
      if(chars.includes('\n')) {
        console.log('isNumber(chars): ', chars);
        chars.split(newLineChar).map((item) => {
          if(isNumber(item)) {
            numbers = [...numbers, parseInt(chars)]
          }
        })
      }
      if(isNumber(chars)) {
        // num = chars
        numbers = [...numbers, parseInt(chars)]
      }
    })
    // if(num !== '') {
      //   numbers = [...numbers, parseInt(num)]
      // }
    // console.log('isNumber(chars): ', numbers);
    setNumVals(numbers)
  }

  const performOperation = () => {
    if(numVals.length === 0) {
      return
    }
    console.log('Performing Addition', numVals)
    setResult(numVals.reduce((acc, item) => item < 1000 ? acc+item : acc+0, 0))
    // console.log('Result is set', result)
    // console.log(result)
  }

  return (
    <div>
      <input type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={() => {
        // console.log('Button Clicked');
        valueParser()
      }}>
        Perform Addition</button>
      <div>
        <span>Input Value: {inputText}, </span>
        <span>Answer: {result}</span>
      </div>
    </div>
  )
}

export default ValueAdder