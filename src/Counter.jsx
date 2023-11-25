import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button/Button'
import Counter from './Counter/Counter';
import History from './History/History';

let nextIndex = 0;

function App() {
 
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const USER_ACTIONS = {
    MINUS: "+",
    PLUS: "-"
  }
  function handleBtnClick() {
    setCounter(counter - 1);
    setHistory([...history, {id: uuidv4(),count: counter, operation: USER_ACTIONS.MINUS}]);
  }
  function handleChangeBtnClick() {
    setCounter(counter + 1);
    setHistory([...history, {id: uuidv4(),count: counter, operation: USER_ACTIONS.PLUS}])
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
      <History
        history={history}
        setHistory={setHistory}
      />
    </>
  )
}

export default App
