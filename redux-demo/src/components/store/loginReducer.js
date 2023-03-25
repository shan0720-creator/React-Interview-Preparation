// To create a global store, I will use the createStore() method of redux
// const store = createStore(reducer)
// This means we will have to create the reducer function first, and then we will pass it to the createStore() method as an arguement
import * as actions from './actions';
const initData = {
    users:['admin','manager','end-user'],
    loginDet:'None'
   
}

const loginReducer=(state=initData,action)=>{
    if(action.type === 'LOGIN'){
        return{
            ...state,
            loginDet:action.loginDet
        }
    }
   
    return state;
}
export default loginReducer;

// The <Provider/> component makes the Redux store available to any nested components that need to access the Redux store
// If you want to provide the store to few components, You can wrap around only those components
// <Provider store ={store}/>
// <Component1/>
// <Component2/>
// <Component3/>
// </Provider>,
// we will be wrapping it around the entire <App/>
// i.e: at the highest level and that we will do inside index.js of our application
// <Provider store={store}>
// <App/>
// </Provider>
// The <Provider> is used to make the store object availaible 
// No, it is not essentials to put <Provider/> inside index.js
// Index.js is the Highest level - that's where the app is rendered, so we prefer it.
// Syntax for using : - useSelector data using state hook
// (For cart Data)
// const cart = useSelector((state)=>state.cart);
// (For total Data)
// const total = useSelector((state)=> state.total)
// useStore() : - This hook passes all of the components , so you generally do not need this hook
// Explain the flow of event Handling with redux?
// Whenever there is an event you have to write that event inside of the reducer function
// How do you dispatch events with hooks : - Explain the useDispatch() hook
// The useDispatch() hook returns a reference to the dispatch function from the redux store

