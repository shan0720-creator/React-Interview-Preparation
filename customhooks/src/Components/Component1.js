import React, {useState} from "react";
import '../App.css';
import useCounter from "../CustHooks/useCounter";

function Component1(){
    
    const buttonClicked = useCounter(0,"Component1")
        
    
    return(
        <div className="component">
            <h1>This is the First Component</h1>
            <button onClick={buttonClicked}>Click here!</button>
        </div>
    )
}




export default Component1;