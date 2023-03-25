import React,{useState} from 'react';


const Counter=()=>{
    const[counter,setCounter] = useState(10);
    const[input,setInputChange] = useState(' ');
    return(
        <div>
            <h3 data-testid="cnt">{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <hr/>
            <input type="text" data-testid="input" onChange={(e)=>{setInputChange(e.target.value)}}/>                         //default-value=10
        </div>
    )
}
export default Counter;