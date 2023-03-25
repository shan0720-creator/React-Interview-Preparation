import {Component} from "react";
import {connect} from "react-redux";

class PurchaseCl extends Component{
    render(){
        return(
            <div className="customDiv">
            <h3>Purchase-Class Component</h3>
            <hr/>
            <select onChange={(e)=>this.props.purchaseHandler(e)}>
               {
               this.props.products.map((product,index)=>{
                    return(
                        <option value={product.price} key={index}>
                            {product.pName} - ${product.price}
                        </option>
                    )
                 })
               }
            </select>
            
         </div>
        )
    }
}


const actionPurchase=(e)=>{
    let pName = e.target.options[e.target.selectedIndex].text;
         let price = e.target.value;
         let obj = {pName,price};
         return({type:'PURCHASE',payLoad:obj})
}
const mapStateToProps=(state)=>{
    return{
       products:state.products,

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        purchaseHandler:(e)=>dispatch(actionPurchase(e))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PurchaseCl)

// The connect() function allows the class based component to connect with the redux store
// mapStateToProps is a function which is called anytime the store is updated


/*
  const mapStateToProps=(state)=>{
    return{
        products: state.products
    }
  }



 */