import {useEffect, useState} from 'react';

function useCounter(initialValue, componentName){

 const[counter, setCounter] = useState(initialValue);

 const resetCounter = ()=>{
    setCounter(counter+1)
 }
 
 useEffect(()=>{
    console.log(componentName + "s click count :" +counter)
 })

 return resetCounter;

}


export default useCounter;
