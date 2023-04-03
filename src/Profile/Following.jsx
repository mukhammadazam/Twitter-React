import { useContext, useState } from "react"
import { FetchContext } from "../context/FitchConbonet";
import './Followers.scss';
const Following = () => {
  const [search, setSearch]=useState('')
  const [follow, setfollow]=useState('');
  const [follow1, setfollow1]=useState('');
  const followFun=(e)=>{
    return setfollow(e);
  }
    const {data}=useContext(FetchContext);
const filterFun=data.filter((value1)=>{
  if(search ===''){
    return value1;
  } else if(value1?.title?.toLowerCase().includes(search?.toLowerCase())){
    return value1;
  }
}).slice(34,100).map((Element,index)=>(
  <div key={index} className="Element pb-5 d-flex align-items-center justify-content-between">

    <img className="Element__img" src={Element.urlToImage} alt={Element.url} />
    <h3 className="Element__title">{Element.title.slice(0,20)}</h3>
    <button onClick={(e)=>setfollow(index)} className={`Element__btn ${follow === index ? 'd-block' : 'd-none'}`}>Follow</button>
    <button onClick={(e)=>setfollow(index)} className={`Element__btn ${follow===index ? 'd-none' : ''}`}>Following</button>
  </div>
))
    return (
    <div >
      <input onChange={(evt)=>setSearch(evt.target.value)}  type="text" placeholder="Search twitter" className="border-end-0 input d-block border-start-0 border-top-0 border-bottom-2" />
{filterFun}
        </div>
  )
}

export default Following;