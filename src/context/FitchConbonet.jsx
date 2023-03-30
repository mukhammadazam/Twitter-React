import { useState,useEffect } from "react"
import axios from 'axios'
const FitchConbonet = () => {
const [data,setData] =useState([]);
const [input,setInput]=useState('')
const fetchFun= async ()=>{
const response=await axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=f4067fe682044e6787e881d30a1c01ba')
setData(response.data.articles)
}
useEffect(()=>{
    fetchFun()
},[])
const felterFun=data.filter((value)=>{
if(input ===""){
return value;
} else if(value?.author?.toLowerCase().includes(input?.author?.toLowerCase())){
    return value;
}
}).map((el,index)=>(
    <div key={index} className="card">
<h1>{el.author}</h1>
    </div>
))
  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" className="input d-block  px-5 inputt w-75 p" />
{felterFun}
    </div>
  )
}

export default FitchConbonet;