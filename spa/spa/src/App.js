import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Product';
import {Routes,Route,Link, Outlet} from  'react-router-dom';
import ProductDetail from './Components/ProductDetails';
import NotFound from './Components/NotFound';
import { useRoutes,NavLink } from 'react-router-dom';

function App() {
  
 
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/home" style={{textDecoration: 'none'}}>Home</NavLink></li> 
        <li><NavLink to="/products" style={{textDecoration: 'none'}}>Products</NavLink></li>
        <li><NavLink to="/about" style={{textDecoration: 'none'}}>About</NavLink></li>
        
      </ul>
      
      <hr/>
     <Routes>
       <Route path="/">               
        <Route index element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/products' element={<Products/>} >
        <Route path=":id" element={<ProductDetail/>}/> 
        </Route>
        <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes> 
      
    </div>
  );
}

export default App;
// The Parent route "/" wraps all the other routes that are its children above
// You give the index to indicate the parent child relation ship





// All the routes and components will be wrapped inside <BrowserRouter> Component
// as it will store the clear URLS internally, using which you actually route through all the components or basically the entire application
// The route product detail is the child of products 


//When it comes to sharing the data to child component there is an attribute called "context" which you can use with the <Outlet/>
// use of use Routes hook
/*  let routeElements = useRoutes([
    {
      path: '/',         
      children: [
        {
          index:true,
          element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
          path: '/products',
          element: <Products/>,
          children: [
            {
              path: 'id',
              element: <ProductDetail/>

            }
          ]
        },
        {

          path:'*',
          element:<NotFound/>
        }
      ]
    }
   ]) */

  // and then use the {routeElements} to render routes in the same manner
// navlink is specifically used when we have to apply more styling
