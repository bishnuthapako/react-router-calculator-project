import React from 'react'
import { useParams } from 'react-router-dom'

function Calculator() {
  const {operate, num1, num2} = useParams();

  let result;
  switch(operate){
    case "add":
      result = Number(num1) + Number(num2);
      break;
    case "sub":
      result = Number(num1) - Number(num2);
      break;
    case "mult":
      result = Number(num1) * Number(num2);
      break;
    case "div":
      result = Number(num1) / Number(num2);
      break;
      default:
        result = "Invalid Operations"
  }

  return (
    <h1 className='fw-bold bg-primary text-white rounded'>{result}</h1>
  )
}

export default Calculator