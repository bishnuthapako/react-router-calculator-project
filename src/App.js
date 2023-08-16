import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Calculator from "./Calculator";

function App() {
  
  return (
    <div className='head'>
      
      <div className='calculate text-center text-white fw-bold'>
        <Routes>
          <Route path="/:operate/:num1/:num2" element={<Calculator />} />
        </Routes>
      </div>
    </div>
  )
}

export default App