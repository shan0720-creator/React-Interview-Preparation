import { Link, Outlet } from "react-router-dom";
import React,{useState} from "react";


const Products=()=>{
    const [products,setProducts] = useState([
        {id:1,pname:'Apples',desc:'Red Juicy Apples',price:'$50',shipping:'$3',img:"https://www.freepnglogos.com/uploads/apple-png/apple-icon-paradise-fruits-iconset-artbees-0.png"},
        {id:2,pname:'Kiwi',desc:'Green Juicy Kiwi',price:'$20',shipping:'$3',img:"https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg"},
        {id:3,pname:'Banana',desc:'Yellow Natural Bananas',price:'$10',shipping:'$3',img:"https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=2000"},
        {id:4,pname:'Oranges',desc:'orange Juicy ',price:'$60',shipping:'$3',img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg"}
      ])
    return(
        <div>
           <ul>
            {
                products.map((prod)=>{
                    return(
                        <li className="card"><Link state={prod} to={`/products/${prod.id}`} style={{textDecoration: 'none' }}><img src={prod.img}/><div className="text"><h3>{prod.pname}</h3></div></Link></li>
                    )
                })
            }
            
            
           </ul>
           <Outlet context={products}/> 
        </div>
    )
}

export default Products;

// rENDER THE Children using in the outlet
// <Outlet context={object}/>
// With the "context" attribute, You can pass the data as an object literal , The object is passed to the child component and to refer the passed data
// inside the child component you have the useOutletContext() hook
// actually state={prod} is passing only that data 