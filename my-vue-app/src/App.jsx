import React, {useState} from 'react'
import Button from './Button/Button'
import Counter from './Counter/Counter';
let nextIndex = 0;

function App() {
 
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  function handleBtnClick() {
    setCounter(counter - 1);
    setHistory([...history, {id: nextIndex++,count: counter, operation: "-"}]);
  }
  function handleChangeBtnClick() {
    setCounter(counter + 1);
    setHistory([...history, {id: nextIndex++,count: counter, operation: "+"}])
  }
  function checkMinimalValue () {
    return counter === -5
  }
  function checkMaxValue () {
    return counter === 5
  }
  function counterOutOfRange () {
    return counter < -3 || counter > 3
  }

  return (
    <>
      <Counter 
        value={counter}
        isDanger={counterOutOfRange()}/>

      <Button
        text = "-"
        onClick={handleBtnClick}
        isDisabled={checkMinimalValue()}/>
      <Button
        text = "+"
        onClick={handleChangeBtnClick}
        isDisabled={checkMaxValue()}/>
      <ul className="operation-history">
        {history.map(field => (
          <li key={field.id}>Значение счетчика: {field.count} операция {field.operation}</li>
        ))}
      </ul>
    </>
  )
}

export default App
