// react also known as React js is s free and open-source frontend javascript library for building single-page-applications
//and user-interfaces on UI components. It is maintained by facebook and a community of individual developers and company


// Imperative and declarative Approach: - with declarative, you just tell what to do and in imperative you also tell How to do
// imperative means : - Giving too much of instructions
// With react you create a component and tell that how you want the dom to be and rest is handled by react
// HTML written inside the Javascript is called JSX


//Html
<div id = "pers1">
</div>
<div id="pers2">
</div>


//React Code
function PersInfo(props){return (
    <div class="pers">
      <h2>Name: {props.name} </h2>
      <h2> Age: {props.age} </h2>
      </div>
  )
  }
  ReactDOM.render(<PersInfo name="shantanu" age="23"/>,document.getElementById("pers1"))
  ReactDOM.render(<PersInfo/>,document.getElementById("pers2"))                      //Also Do not repeat react dom
  
  // The data passed as attribute in the components tag - that is passed as an object literal in the function is called props
  // Information passed to components is called props
  // You can also pass the data like this
  let pDet = (
    <div>
        <PersInfo name="Name1" age="34"/>
        <PersInfo name= "Name2" age="45" />
        <PersInfo name= "Name3" age="23" />

    </div>
  )
  ReactDOM.render(pDet,document.getElementById("root"))
  // Command-line Interface helps to create prerequisite environment
  // for a react project
  
  //What is the difference between npm and npx
  // npm will install the package and then  executes it 
  // where as npx executes and then uninstall that package

  // Destructuring: - is getting individual pieces from a data structure like arrays or object literals

  // props are the values you pass as attributes with the component
  // props are immutable and you cannot change props


  // React states: - 
  // When  you have value as variable and not as a state then react will not watch for it

  // useState() Hook has a facility to create a state in react
  // useState() always returns one array with two elements
  // State value: - Value which we have given of the state. eg: - Number,boolean,string,Array
  // A function : - which allows you to change the state value

  // "State": - is like a variable which is being watched by React Application
  // If there are any changes made to the "State", React will make sure that they are re-rendered
  // "The changes are updating in the dom as well"
  // "This is kind of a setter method which allows you to change the state"
  // "Directly taking a variable will not refresh/render it on a page but when taken as a state- then whatever changes are done to the state, those are automatically reflected on the user interface"


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
  
  
  return (
    <div className='App'> 
     <h1>{i}</h1>
     <button onClick={addvalue}>Increment</button>
     <button onClick={negvalue}>Decrement</button>
    </div> 
  );
}

export default App;


//Lazy Initialisation
import "./styles.css";
import React, { useState } from "react";
function initialState() {
  console.log("Expensive Process:" + Date.now());
  return 0;
}

export default function App() {
  const [cnt, setCnt] = useState(()=>initialState());
  return (
    <div className="App">
      <h1>{cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}> Increment </button>
    </div>
  );
}
// when you actually do not want to execute the initial process or statements of a function , then you can use arrow function declaration inside of the usestate hook like this: - useState(()=>initialState())
// so that it does not call it on re-render

function App(){
  const [i,setCount] = useState(0);
  const changeCounter = (op)=>{
    if(op==='+'){
      setCount(i+1);
    }else{
      setCount(i-1);
    }
  }
}

// Use the arrow function to return the change counter function : - if you need to pass parameters in the function, arrow function is the easiest approach
return (
   <div className = "App">
    <h1>{i}</h1>
    <button onClick = {()=>changeCounter('+')}>Increment</button> 
    <button onClick = {()=>changeCounter('-')}>Decrement</button>
   </div>
)


// like <button onClick={()=>test(5)}

// JSX : - Any code which appears like HTML and is written inside Javascript is the JSX Code
import "./styles.css";

export default function App() {
  let a = 5;
  let b = 6;
  let msg = <h1>Hi!{a + b}</h1>;
  let msg2 = <h2 style={{ color: "blue" }}>{new Date().toDateString()}</h2>;
  return (
    <div className="App">
      {msg} {msg2}
    </div>
  );
}
// The javascript expression can be written as a part of jsx
// tabindex html is  = tabIndex for jsx
// <h1 class="abc">  <h1 className="abc">

// What is the need to import React for JSX (You may need React for other things)

// How to use states with multiple type values
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mflag, setFlag] = useState(true);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{mflag.toString()}</h2>
      <button onClick={() => setFlag(!mflag)}> Toggle </button>
    </div>
  );
}


//How to use states with object literal values
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [sObj, setCount] = useState({
    cnt: 0,
    mFlag: true
  });

  const cntHandler = (op) => {
    let tc = sObj.cnt;
    if (op === "+") {
      tc++;
      setCount({ ...sObj, cnt: tc }); // use this spread operator to tell that let the element be as it is
    } else {
      tc--;
      setCount({ ...sObj, cnt: tc });
    }
  };
  return (
    <div className="App">
      <h1>Counter:{sObj.cnt}</h1>
      <button onClick={() => cntHandler("+")}>Increment</button>
      <button onClick={() => cntHandler("-")}>Decrement</button>
      <h3>{sObj.mFlag.toString()} </h3>
      <button onClick={() => setCount({ ...sObj, mFlag: !sObj.mFlag })}>
        Toggle{" "}
      </button>
    </div>
  );
}


// class Component basics
import "./styles.css";
import React, { Component } from "react";
export default class App extends Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
// render():- is a component lifecycle method which must be defined in all class components
// Explain :- in version before React 16.8, class was the only component which could use "state" in it
// After React 16.8, even the functional component have states
// render() is a very essential component life cycle method
// render() is needed when you have a class so whatever and whenever states are updated, this method will be called
// How to update the state , like if you are implementing a counter , then it happens like this: -
import "./styles.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0
  };
  increment = () => {
    let c = this.state.counter;
    c++;
    this.setState(
      (state, props) => { //or this.setState({counter:c})
        return {
          counter: c
        };
      },
      () => {
        console.log("Rendered");
      }
    );
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
// render():- is a component lifecycle method which must be defined in all class components
// Explain :- in version before React 16.8, class was the only component which could use "state" in it
// After React 16.8, even the functional component have states
// render() is a very essential component life cycle method
// render() is needed when you have a class so whatever and whenever states are updated, this method will be called
// In the case of class component, we have a common method called setState() which is used to change the state all the time
// Mounting phase: - render() gets executed when the component is loaded
// Updating Phase: - render() gets executed when there is an update in the component
import "./styles.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0
  };
  increment = () => {
    let c = this.state.counter;
    c++;
    this.setState(
      (state, props) => { //or this.setState({counter:c})
        return {
          counter: c
        };
      },
      () => {
        console.log("Rendered");
      }
    );
  };
  componentDidMount(){
    console.log("CDM") // This gets called automatically , executed once the 
  }
  componentWillUnmount(){
    console.log("UnMount");
  }
  shouldComponentUpdate(){
    return false;
  }
  render() {
    console.log("This is rendered")
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

// Generally when we make API end point calls (HTTP/AJAX) we also write that code in componentDidMount()
// When you have a class component, there are various phases where the component life cycle methods are getting executed automatically

  // useEffect
  import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [cTime, setTime] = useState(new Date().toLocaleString())
  useEffect(() => {
    setInterval(()=>{
      setTime(new Date().toLocaleString())},1000)
    
  });
  return (
    <div className="App">
      <h1> {cTime} </h1>
      <button onClick={() => setTime(new Date().toLocaleString())}>Increment </button>
    </div>
  );
}

// useEffect() hook is a hook which comes handy in such type of situations where it can be used to deal with few of the component life cycle methods
// useEffect() hook is called everytime when the component is rendered or re-rendered
// componentdidmount and update and willunmount all combined give useeffect
// Why is useeffect used: - Mutations, subscriptions, timers, logging are not allowed inside the main body of component


// specify the variables you want the useeffect hook to watch for
// so that it updates only for those values

import "./styles.css";
import {useState,useEffect} from 'react'
let g = 0;
export default function App() {
  
  const[cnt,setCnt] = useState(0);
  const[flag,setFlag] = useState(true);
  useEffect(()=>{
   console.log("Effect called" + g++)
  },[cnt]) // useeffect only watches for the cnt variable, you can add multiple states
  return (
    <div className="App">
      <h1>{cnt +'+'+ flag.toString()}</h1>
      <button onClick={()=>setCnt(cnt+1)}>Add</button>
      <button onClick={()=>setFlag(!flag)}>Toggle</button>
    </div>
  );
}

//conditional rendering and clean up effect
import React, { useState, useEffect } from "react";
import ShowXY from "./ShowXY";

import "./styles.css";
export default function App() {
  const [showData, changeState] = useState(true);
  return (
    <div className="App">
      {showData ? <ShowXY /> : <h1>No Data</h1>}
      <button onClick={() => changeState(!showData)}> Toggle </button>
    </div>
  );
}


import React, { useState, useEffect } from "react";

export default function ShowXY() {
  const [strXY, changeXY] = useState("0,0");

  const displayXY=e=>{
    let str = e.pageX + "," +e.pageY;
    changeXY(str);
    console.log(str);
  }
  useEffect(() => {
  window.addEventListener("mousemove",displayXY); //This is called when the component is re-rendered or loaded
    return () => {
     window.removeEventListener("mousemove",displayXY); //This method is called when the component is unloaded
    }
  })
  return (
    <div>
      <h1>{strXY}</h1>
    </div>
  );
}

// setFocus using componentdidmount() and ref of react
import "./styles.css";
import React, { Component } from "react";
class App extends Component {
  componentDidMount(){
    this.iElement.focus(); // onload of the component you just set the focus on that time only
  }
  render() {
    return (
      <div className="App">
        <input type="text" />
        <hr />
        <input type="text" ref={(elem) => (this.iElement = elem)} />
        <hr />
        <button onClick={() => this.iElement.focus()}>Set Focus</button>
      </div>
    );
  }
}

export default App;

//ref the older way: - ref: - the reference of any dom element using react
// for second input box when we hit the set focus button , the focus comes to second input box using react
// You want to get the reference of any element use the ref 

// The above is the older method of doing things, so for the current method you do thing like below
import "./styles.css";
import React, { Component } from "react";
class App extends Component{
  constructor(props){
    super(props);
    this.iElement = React.createRef();
  }
  componentDidMount(){
    this.iElement.current.focus(); // onload of the component you just set the focus on that time only
  }
  render() {
    return (
      <div className="App">
        <input type="text" />
        <hr />
        <input type="text" ref={this.iElement} />
        <hr />
        <button onClick={() => this.iElement.current.focus()}>Set Focus</button>
      </div>
    );
  }
}

export default App;

//How You use useref with functional components
import "./styles.css";
import React, { useRef} from "react";
function App(){
   const iElement = useRef(null);
   useEffect(()=>{
    iElement.current.focus();
   })
    return (
      <div className="App">
        <input type="text" />
        <hr />
        <input type="text" ref={iElement} />
        <hr />
        <button onClick={() => iElement.current.focus()}>Set Focus</button>
      </div>
    );
  }


export default App;
// The ref, createRef(), or useRef() are used to get the reference of the elements
// Memoization is a term used in computing for optimizing the performance by storing the results of expensive functions and returning the cached results
// By using the usecallback() and React.memo(), you practically improve the performance by making sure that the components are not rendered unnecessarily
// when you are using multiple components in a react file , and when clicking on a button you just want that component to be rendered then this thing is used


  // Map method
  import "./styles.css";

export default function App() {
  let arr = [1, 2, 4, 5];
  let arr1 = arr.map((element) => {
    return element * element;
  });
  let arr2 = ["string", "stringify", "Global"];
  let god = arr2.map((element) => {
    return element.length;
  });
  let arr3 = [4,16,25];
  let s = arr3.map((element)=>{
     return Math.sqrt(element);
  })

  let products = [
    {pCode:1001,pName:'Apple'},
    {pCode:1002,pName:'Banana'},
    {pCode:1003,pName:'Grapes'},
    {pCode:1004,pName:'Oranges'}
  ]

  let res = products.map((element)=>{
    return element.pName;
  })
  console.log(arr1);
  console.log(god);
  console.log(s);
  console.log(res)
}


// map method
// It returns the new array and it does not change or mutate the original array
// Find the length of all the elements using array


// How do you render a list
// How to render a collection of values

import "./styles.css";
import {useState} from 'react';
export default function App() {
   const temp = ["Apple","Banana","Grapes","Oranges"];
   const [products,setProducts] = useState(temp);
   return (
     <div className="App">
       {
         products.map((products)=>{
           return (
             <li> {products} </li>
           )
         })

       }
     
       </div>
   )
}

// How do you render a list
// How to render a collection of values

import "./styles.css";
import {useState} from 'react';
export default function App() {
   const temp = [
     {id:1,pName:'Apple',price:'$10'},
     {id:2,pName:'Banana',price:'$5'},
     {id:3,pName:'Grapes',price:'$7'},
     {id:4,pName:'Oranges',price:'$8'},

   ];
   const [products,setProducts] = useState(temp);
   return (
     <div className="App">
       {
         products.map((product,i)=>{
           return (
             <li key={product.id.toString()}> {product.pName} </li>
           )
         })

       }
     
       </div>
   )
}

// react need to identify each rendered item with an "Id" when the item needs to be added , changed or removed
// Whenever you loop using the map() method, make sure to have a unique key attribute
// when react needs to change that particular item , then there has to be a unique value to refer the element whenever there is a change or addition to the list
// should you use the index of map() method i.e: the index of array as a key attribute
// The best way to pickup a key is to use a string that uniquely identifies a list item among its siblings and it has to be a stable identity

//use of props and another file 

import "./styles.css";
import {useState} from 'react';
import ListItem from "./components/list";
export default function App() {
   const temp = [
     {id:1,pName:'Apple',price:'$10'},
     {id:2,pName:'Banana',price:'$5'},
     {id:3,pName:'Grapes',price:'$7'},
     {id:4,pName:'Oranges',price:'$8'},

   ];
   const [products,setProducts] = useState(temp);
   return (
     <div className="App">
       {
         products.map((product,i)=>{
           return (
             <ListItem pName={product.pName}/>
           )
         })

       }
     
       </div>
   )
}


// Inside component file
const ListItem = (props) => {
  return (
    <div>
      <li> {props.pName} </li>
    </div>
  );
};
export default ListItem;


// Making a function and putting map inside of it
import "./styles.css";
import {useState} from 'react';
import ListItem from "./components/list";
export default function App() {
   const temp = [
     {id:1,pName:'Apple',price:'$10'},
     {id:2,pName:'Banana',price:'$5'},
     {id:3,pName:'Grapes',price:'$7'},
     {id:4,pName:'Oranges',price:'$8'},

   ];
   const [products,setProducts] = useState(temp);
   let productList = (
    products.map((product,i)=>{
      return (
        <ListItem pName={product.pName}/>
      )
    })
   )
   return (
     <div className="App">
       {
        productList //embedding map in jsx or function

       }
     
       </div>
   )
}
// When we pass attributes to a component, they are recieved as props in the component definition



// Inshort when you say e.target that means you are going to get the reference of the element which raised the event
// with e.target.innerHTML we are going to get the inner html of the target element
// Synthetic event is a wrapper around the native browser event object and that is passed to every function automatically


import "./styles.css";

export default function App() {
  const getData = (e)=>{
    console.log(e.target);
    console.log(e.target.innerHTML)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick = {getData}> Get Data </button>
    </div>
  );

}



// Using an input box and whenever you type the value inside of the input box it appears on the top
//input box synthetic event
import "./styles.css";
import React,{useState} from "react";
export default function App() {
  const[h,setH] = useState('Default')
  const getData = (e)=>{
    setH(e.target.value)
    console.log(e.target);
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <h1>{h}</h1>
     <input onChange={getData} type="text"/>
    </div>
  );

}


// Form for input with multiple states
import "./styles.css";
import React,{useState} from "react";
export default function App() {
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[mobile,setMobile] = useState("");
  const[data,setData] = useState("data");

  const firstNameHandler=(e)=>{
    setFirstName(e.target.value);
  }
  const lastNameHandler=(e)=>{
    setLastName(e.target.value);
  }
  const mobileNameHandler=(e)=>{
    setMobile(e.target.value);
  }

  const datahandler=(e)=>{
    setData(e.target.value);
  }
    


  const getData = (e)=>{
     e.preventDefault();
     setData(firstName+ ',' + lastName + ',' +mobile)
  }
  return (
    <div className="App">
     <div>
       <form onClick={getData}>
         <input type="text" placeholder="First Name" onChange={firstNameHandler}/>
         <br/>
         <input type="text" placeholder="Last Name" onChange={lastNameHandler}/>
         <br/>
         <input type="text" placeholder="Mobile" onChange={mobileNameHandler}/>
         <br/>
         <input type="submit" value="Submit" onChange={datahandler}/> 
         </form>
         {data}
       </div>
    </div>
  );

}

// Take value inside an object literal

import "./styles.css";
import React,{useState} from "react";
export default function App() {
   const [persInfo, setPersInfo] = useState({
     firstName:'',
     lastName:'',
     mobile:''
   })
  

  const firstNameHandler=(e)=>{
    setPersInfo({...persInfo,firstName:e.target.value});
  }
  const lastNameHandler=(e)=>{
    setPersInfo({...persInfo,lastName:e.target.value});
  }
  const mobileNameHandler=(e)=>{
    setPersInfo({...persInfo,mobile:e.target.value});
  }
  

  
    


  const getData = (e)=>{
     e.preventDefault();
     setData(firstName+ ',' + lastName + ',' +mobile)
  }
  return (
    <div className="App">
     <div>
       <form onSubmit={getData}>
         <input type="text" placeholder="First Name" onChange={firstNameHandler}/>
         <br/>
         <input type="text" placeholder="Last Name" onChange={lastNameHandler}/>
         <br/>
         <input type="text" placeholder="Mobile" onChange={mobileNameHandler}/>
         <br/>
         <input type="submit" value="Submit"/> 
         </form>
         {JSON.stringify(persInfo)} // Objects are not valid as a react child.
       </div>
    </div>
  );

}




import "./styles.css";
import React,{useState} from "react";
export default function App() {
   const [persInfo, setPersInfo] = useState({
     firstName:'',
     lastName:'',
     mobile:''
   })
  


  //  use of only single chain handler to manage all three
  const inputChangeHandler = (e)=>{
  setPersInfo((prevState)=>{

      return {...prevState, [e.target.name]: e.target.value}
  })

  };


  const getData = (e)=>{
     e.preventDefault();
    
  }
  return (
    <div className="App">
     <div>
       <form onSubmit={getData}>
         <input type="text" placeholder="First Name" name="firstName" onChange={inputChangeHandler}/>
         <br/>
         <input type="text" placeholder="Last Name" name="lastName" onChange={inputChangeHandler}/>
         <br/>
         <input type="text" placeholder="Mobile" name="mobile" onChange={inputChangeHandler}/>
         <br/>
         <input type="submit" value="Submit"/> 
         </form>
         {JSON.stringify(persInfo)}
       </div>
    </div>
  );

}
// Why is updating state with "functional update" syntax better
// The main reason to do so is that react does not update the state immediately as it has own method or schedule to update the states
// In case there are many updates of the state happening at the same time , it may refer to an incorrect copy of a state


// Input form with checkbox and textfield
import "./styles.css";
import React,{useState} from "react";
export default function App() {
   const [persInfo, setPersInfo] = useState({
     firstName:'',
     lastName:'',
     mobile:''
   })
  


  //  use of only single chain handler to manage all three
  const inputChangeHandler = (e)=>{
  setPersInfo((prevState)=>{

      return {...prevState, [e.target.name]: e.target.value}
  })

  };
  const inputCheckHandler = (e)=>{
    setPersInfo((prevState)=>{
  
        return {...prevState, [e.target.name]: e.target.checked}
    })
  
    };

  const getData = (e)=>{
     e.preventDefault();
    
  }
  return (
    <div className="App">
     <div>
       <form onSubmit={getData}>
         <input type="text" placeholder="First Name" name="firstName" onChange={inputChangeHandler}/>
         <br/>
         <input type="checkbox" placeholder="Last Name" name="lastName" onChange={inputCheckHandler}/>
         <br/>
         <input type="text" placeholder="Mobile" name="mobile" onChange={inputChangeHandler}/>
         <br/>
         <input type="submit" value="Submit"/> 
         </form>
         {JSON.stringify(persInfo)}
       </div>
    </div>
  );

}
// Why is updating state with "functional update" syntax better?
// DropDown Button => value property
// Textboxes => value property
// Checkbox/radio button=> checked property


//Single Page Application vs Multipage Application
// MPA: - multi-page application approach, where there is a new document getting loaded for various web pages
// MPAS will have the entire page getting reloaded whereas spas will have the main page loaded once and then  the sub page
// sections are changing without a refresh and this is handled by Javascript inside the browser
// MPAS reload the HTML Pages, HTML pages with CSS and other things are rendered on the server and then they are delivered
// They are reloaded/ re-rendered at the client side
// The refresh of the page is visible to the end user



//complex state management
// There are various ways like context API or redux to deal with state when you want it to be global or flexible across various components
// or an entire application
// Generally you may have some or few bunch of data , which you want to share across various components or the entire application
// passing the data from component to component is called as prop drilling
// You have to keep passing the data at different levels
// It becomes very difficult to handle the states at different level
// to solve this complex scenario we can use context API or redux to make the state values global so any components can access the values
// so generally, the practice is to make only those things global which is shared among various components

// REDUX 
// 1.> Create the Global store and reducer
// Use the <Provider> to pass/provide the store data 
// 3.> Access the store data at component level
// 4.> Dispatch action if there are events

// Reducer becomes a global function where you are going to deal/manipulate with the state and dispatch() is a method which is called from the component on every event
// npm install --save redux react-redux
// Whenever you have an application which has a larger size or data set - there will be data shared among various components or the entire application

// <select onChange={(e)=> purchaseHandler(e)>
    //  const dispatch = useDispatch();
     //  ///purchase Handler ///
       //  const purchaseHandler=(e)=>{
          //code
       //  dispatch({type: 'PURCHASE', payload: obj})}}

       // whenever there is an event you have to write that event inside the reducer function
       // dispatch function is passed to action as parameter and then you can check the action.type == 'ADD' and payload is kind of secondary data


       // Custom Hooks
       