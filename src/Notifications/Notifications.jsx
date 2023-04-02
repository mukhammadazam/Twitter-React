import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Noti.scss';
import { FetchContext } from '../context/FitchConbonet';
const Notifications = (e) => {
const {data}=useContext(FetchContext);
const [togle,setTogle]=useState('All');
const togleFun=(e)=>{
  setTogle(e)
}

return (
<div className='d-block'>
<div className='div'>
    <h1 className='div__title'>Notifications</h1>
<div className="button d-flex">
  <button onClick={()=>setTogle('All')}   className={`d-block  button__btn2 ${togle === 'All' ? 'bg-light' : ''}`}>All
  <span className={`d-block  ${togle === 'All' ? 'leni' : ''}`}></span>
  </button>
  <button onClick={()=>setTogle('Verified')}  className={`d-block  button__btn3 ${togle === 'Verified' ? 'bg-light' : ''} `}>Verified
  <span className={`d-block  ${togle === 'Verified' ? 'leni' : ''}`}></span>
  </button>
  <button onClick={()=>setTogle('Mentions')} className={`d-block  button__btn4 ${togle === 'Mentions' ? 'bg-light' : ''}`}>Mentions
  <span className={`d-block  ${togle === 'Mentions' ? 'leni' : ''}`}></span>
  </button>
</div>
  </div>
  <div className="All ps-5 pt-5">
    {
      data.map((all,index)=>(
<div key={index}>
<Link className='text-decoration-none text-dark'>{all.author}{all.url.slice(0,50)}</Link>

</div>
      ))
    }
  </div>
</div>
  )
}

export default Notifications