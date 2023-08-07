import "./styles.css"
import { useState } from "react"


function App() {
  
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operation, setOperation] = useState(null);

  function inputNum(e){
    var input = e.target.value;
    if(num === 0){
      setNum(input);
    }
    else{
      setNum(num + input);
    }
  }

  function clear(e){
    setNum(0);
  }

  function porcentage(){
    if(num === 0){
      return 0;
    }
    else{
      setNum(num / 100);
    }
  }

  function changeSignal(){
      setNum(num * -1);
  }

  function operationHandler(e){
    setOperation(e.target.value);
    setOldNum(num); //armazena o valor atual
    setNum(0); //zera o valor atual
  }

  function calculate(){
    if (operation === "+"){
      setNum(Number(oldNum) + Number(num));
    }
    if (operation === "*"){
      setNum(Number(oldNum) * Number(num));
    }
    if (operation === "-"){
      setNum(Number(oldNum) - Number(num));
    }
    if (operation === "/"){
      setNum(Number(oldNum) / Number(num));
    }

    console.log("calculou");
    console.log(oldNum)
    console.log(operation)
    console.log(num)    
  }


  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="result">{num}</div>
      </div>
      <button onClick={clear}>AC</button> {/*span-two ocupa 2 colunas*/}
      <button onClick={changeSignal}>+/-</button>
      <button onClick={porcentage}>%</button>
      <button onClick={operationHandler} value={"/"}>/</button>
      <button onClick={inputNum} value={1}>1</button>
      <button onClick={inputNum} value={2}>2</button>
      <button onClick={inputNum} value={3}>3</button>
      <button onClick={operationHandler} value={"*"}>*</button>
      <button onClick={inputNum} value={4}>4</button>
      <button onClick={inputNum} value={5}>5</button>
      <button onClick={inputNum} value={6}>6</button>
      <button onClick={operationHandler} value={"+"}>+</button>
      <button onClick={inputNum} value={7}>7</button>
      <button onClick={inputNum} value={8}>8</button>
      <button onClick={inputNum} value={9}>9</button>
      <button onClick={operationHandler} value={"-"}>-</button>
      <button onClick={inputNum} value={"."}>.</button>
      <button onClick={inputNum} value={0}>0</button>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  )
}

export default App;
