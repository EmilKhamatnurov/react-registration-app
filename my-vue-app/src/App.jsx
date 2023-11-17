import React from 'react'
import Button from './Button/Button'

function App() {
  function handleBtnClick() {
    alert("Привет")
  }
  
  return (
    <>
      <Button
        text = "Привет"
        onClick={handleBtnClick}
      />
    </>
  )
}

export default App
