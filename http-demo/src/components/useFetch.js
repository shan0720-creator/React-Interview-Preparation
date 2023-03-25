import {useEffect, useState} from "react"


function useFetch(url){
     const[data,setData] = useState(null)


     useEffect((url)=>{
        fetch(url).then((res)=>res.json()).then((data)=>setData(data))
     })

     return [data];
}


export default useFetch;