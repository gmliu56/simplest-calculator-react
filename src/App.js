import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const [result, setResult] = useState(0);
  const [calculatorInput, setCalculatorInput] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); 

  function plus(e) { 
    e.preventDefault();
    setResult((result) => result + Number(calculatorInput)); 
  }; 
 
  function minus(e) {
    e.preventDefault();
  	setResult((result) => result - Number(calculatorInput));  
  };
 
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(calculatorInput)); 
  }; 
 
  function divide(e) {
    e.preventDefault();
    if (calculatorInput === '') {
      return;
    }

    const calculatorInputNum = Number(calculatorInput);
    if (calculatorInputNum === 0 && result === 0) {
      setErrorMsg('Invalid format.');
      return;
    }

    if (calculatorInputNum === 0) {
      setErrorMsg('Cannot divide by zero.');
      return;
    }
    
    setResult((result) => result / Number(calculatorInputNum)); 
  };
 
  function resetInput(e) {
    e.preventDefault();
    setCalculatorInput('');
    setErrorMsg('');
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setErrorMsg('');
    setResult(0);
  };

  function updateCalculatorInput(e) {
    e.preventDefault();
    setErrorMsg('');
    setCalculatorInput(e.target.value);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1>
      </div> 
      <form> 
        <p> 
          {result} 
        </p> 
        <input
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
          value={calculatorInput}
          onChange={updateCalculatorInput}
        />
        <p>{errorMsg}</p>
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
