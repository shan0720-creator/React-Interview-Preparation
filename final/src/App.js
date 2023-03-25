import PersInfo from './components/PersInfo';
import { useState } from 'react';
import './App.css'; // JSX elements must have one parent //Empty Fragments: - <> these are called as empty fragments </>
import {Header,Footer} from './Header'


function App() {

  const [i,setCount] = useState(0);
  
  const addvalue = ()=>{
    setCount(i+1)
    console.log(i)
  }
  const negvalue = ()=>{
    setCount(i-1);
    console.log(i)
  }
  
   const btnStyle = {
    width: "150px",
    height: "100px",             //Inline styling : - First we write the css property in an object literal , and then pass the object literal to the btn.
    color: "blueviolet",
    fontSize: "25px"
    
   }
  return (
    <div className='App'> 
     <h1>{i}</h1>
     <button style={btnStyle} className="cB" onClick={addvalue}>Increment</button>
     <button style={btnStyle} className ="cB"onClick={negvalue}>Decrement</button>
    </div> 
  );
}

export default App;

