import {useLocation,useOutletContext, useParams} from "react-router-dom"

const ProductDetail=()=>{
    const {id} = useParams();
    const pobj = useOutletContext();
    //const location  = useLocation();

    return (
       <div className="prodDetailContainer">
        <div className="imgContainer">
            <img src={pobj[id-1].img} />
        </div>
        <div className="details">
            <h2>{pobj[id-1].pname} @ {pobj[id-1].price}</h2>
            <h3>{pobj[id-1].desc}</h3>
            <h4>Shipping: {pobj[id-1].shipping}</h4>
        </div>
       </div>
    )
}

export default ProductDetail;

// To get the parameter values in the component you use the useParams() hook which returns an Object Literal which {key:value} pair
// use location hook is used to fetch only one particular state
// pobj[id-1]
// "state" is an important attribute with the <Link> which you can use to pass the data across various components inside the router application

