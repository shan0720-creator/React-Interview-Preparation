import {Link,Route,Routes,Switch} from 'react-router-dom'
import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";




function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      
      <Routes>
        
      <Route exact path="/home" element={<Home/>}>
      
      </Route>
      <Route path="/about" element={<About/>}>
      
      </Route>
      <Route path="/products" element={<Products/>}>
      
      </Route>
      
      </Routes>
    
      
      
     
    </div>
  );
}

export default App;
// use the exact key word to render homepage on click