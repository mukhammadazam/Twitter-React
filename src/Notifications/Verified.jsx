import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FetchContext } from "../context/FitchConbonet";
import './Verified.scss'
const Verified = () => {
    const [togle,setTogle]=useState('Verified');
    const {data}=useContext(FetchContext);
const togleFun=(e)=>{
  setTogle(e)
}
  return (
    <div>
        <div className='div'>
 <div className="bground">
 <h1 className='div__title'>Notifications</h1>
<div className="button bg-light d-flex">
  <button onClick={()=>setTogle('All')}   className={`d-block  button__btn2 ${togle === 'All' ? 'bg-light' : ''}`}>
    <Link to='/not' className='text-decoration-none button__btn2 text-dark'>All</Link>
  <span className={`d-block  ${togle === 'All' ? 'leni' : ''}`}></span>
  </button>
  <button onClick={()=>setTogle('Verified')}  className={`d-block  button__btn3 ${togle === 'Verified' ? 'bg-light' : ''} `}>
  <Link to='/ver' className='text-decoration-none button__btn3 text-dark'>Verified</Link>
  <span className={`d-block  ${togle === 'Verified' ? 'leni' : ''}`}></span>
  </button>
  <button onClick={()=>setTogle('Mentions')} className={`d-block  button__btn4 ${togle === 'Mentions' ? 'bg-light' : ''}`}>
  <Link className='text-decoration-none button__btn4 text-dark'>Mentions</Link>
  <span className={`d-block  ${togle === 'Mentions' ? 'leni' : ''}`}></span>
  </button>
</div>
 </div>
  </div>
  <div className="">
{
data.slice(98,99).map((el,index)=>(
<div key={index} className="data">
<img className="d-block w-100 " src={el.urlToImage} alt={el.url} />
<h5 className="pt-3 px-3 text-center">{el.title}</h5>
<p className="px-3 text-center ">Likes, mentions, Retweets, and a whole lot more — when it comes from a verified account, you’ll find it here.</p>
<Link target="_blank" to='https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts' className="fs-5 text-dark d-block text-center"> Learn more</Link>

</div>
))
}
  </div>
    </div>
  )
}

export default Verified