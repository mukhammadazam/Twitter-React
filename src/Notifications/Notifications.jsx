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
  <Link to='/men' className='text-decoration-none button__btn4 text-dark'>Mentions</Link>
  <span className={`d-block  ${togle === 'Mentions' ? 'leni' : ''}`}></span>
  </button>
</div>
 </div>
  </div>
  <div className="All ps-5 pt-5">
   <p className='pt-5 fs-5'>There was a login to your account <Link className='text-decoration-none' to='https://twitter.com/notifications'>@MuhammadazamRi5</Link> from a new <br /> device on 29 мар. 2023 г.. Review it now.</p>
  </div>
</div>
  )
}

export default Notifications