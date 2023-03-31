import { useContext, useState } from "react"
import { FetchContext } from "../context/FitchConbonet"
import uchnuqta from './img/uchnuqta.svg';
import './Explore.scss';
import {Link, link} from 'react-router-dom';
const Explore = () => {
  const [search,setSearch]=useState('')
const {data}=useContext(FetchContext);
const searchFunction=data.filter((value)=>{
if(search ===''){
  return value;
} else if(value?.title.toLowerCase().includes(search?.toLowerCase())){
return value;
}  
}).map((elem,index)=>(
  <div key={index} className="p-3 d-flex align-items-center justify-content-between p-md-0 ps-md-3">
<div className="">
<Link target="_blank" to={`https://www.google.com/search?q=${elem.url}`}className="text-start h5 text-dark text-decoration-none">
{elem.title.slice(0,50)}
</Link>
<p className="">
  {elem.description.slice(0,50)}

</p>
</div>
<Link><img className="link-img" src={uchnuqta} alt="uchnuqta" /></Link>
  </div>
))
  return (
    <div>
<div className="p-3 justify-content-center  p-md-0">
<input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search Twitter" className="input w-100" />
  {searchFunction}
</div>
    </div>
  )
}

export default Explore