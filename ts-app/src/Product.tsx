interface Props{
    pCode:number;
    pName?:string; //Why this question mark , because to make these attributes as optional attributes, add karo ya na karo koi dikkat nahi
    qty?:number;
}

const Product:React.FC<Props>=(props)=>{
    return(
        <div>
            
            {props.pCode} - {props.pName} - {props.qty}
        </div>
    )
}

export default Product;


// While using the function expression to create a component, You use React.FC where FC stands for Function Component and it is an interface
// React.FC annotates that the component function signature is correct and returning valid JSX
