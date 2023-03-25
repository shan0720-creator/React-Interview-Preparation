import { useEffect } from "react";
import {Navigate, useNavigate} from "react-router-dom"

const NotFound=()=>{
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
       navigate("/");
    },2000)
  })
    return (
        <>
          <h1>Not Found</h1>              
        </>
    )
}

export default NotFound;
// Using the navigate component you can actually Navigate to Home when wrong url is tested  // <Navigate to="/">
// The useNavigate() hook returns a function which can be used to navigate to a specific url
// if you give value navigate(-1) then it will re-direct you to previous history page