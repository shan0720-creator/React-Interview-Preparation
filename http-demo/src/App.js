import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import User from './components/User';
import Todo from './components/Todo';
import Error from './components/Error';
import useFetch from './components/useFetch';
function App() {
  const [users,setUsers] = useState([]);
  const [todos,setTodos] = useState([]);
  const [userData,setUserData] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false)
  const fetchUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
      if(response.ok){
        return response.json();
      }else{
        throw new Error("Error");
      }
    }).then(json=>{setUsers(json)})
    .catch((error)=>{
      setErrorFlag(true);

    });
    setUserData(true);
  }
  if(errorFlag){
    return(
      <Error/>
    )
  }

  const fetchTodos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(json=>{setTodos(json)}).catch((error)=>{
      setErrorFlag(true);
    })
    setUserData(false);
  }
  return (
    <div className="App">
      <div className="topbar"></div>
       <button onClick={fetchUsers}>Users</button>
       <button onClick={fetchTodos}>Todos</button>
       {
       userData? users.map((user,index)=>{
          return(
            <div>
              <User user={user}/>
              </div>
          )
        })
       
       :
        todos.map((todo,index)=>{
          return(
            
              <Todo todo={todo}/>
              
          )
        })
       }
    </div>
  );
}

export default App;
