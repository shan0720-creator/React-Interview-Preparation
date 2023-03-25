import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { setTextRange } from 'typescript';
import { useRef } from 'react';

function App() { 
  const [counter,setCounter] = useState<number|string>("Parampara Tode kya?");
  const inputRef = useRef<HTMLInputElement>(null);
  const btnHandler = (e:React.MouseEvent<HTMLButtonElement>):void=>{
    inputRef.current?.focus();
  }

 const[counter1,setCounter1] = useState<number>(1);
 const[txt,setTxt] = useState<string>('');
    const addhandler=(e:React.MouseEvent<HTMLButtonElement>):void=>{     // e is synthetic event object
        setCounter1(counter1+1)
    } 
   const inputChangeHandler=(e:React.ChangeEvent<HTMLSelectElement>):void=>{
          setTxt(e.target.value)
   }
  return (
    <div className="App">
      <h1>Trying useRef()</h1>
      <input type="text"/><br/>
      <input  type="text" ref={inputRef} /><br/>
      <button onClick={btnHandler}>Set Focus</button>
      {counter1}
      <Product pCode={1} />
      <button onClick={addhandler}>Increment</button>
      <hr/>
      <p>{txt}</p>
      <hr/>
     <input type="text" />
      <select onChange={inputChangeHandler}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Grapes">Grapes</option>
        <option value="Orange">Orange</option>
      </select>
    </div>
  );
}

export default App;
