import { useState } from "react"
import './Verified.scss'
import { Link } from "react-router-dom";
const Mentions = () => {
    const [togle,setTogle]=useState('Mentions');
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
  <Link to='/men' className='text-decoration-none button__btn4 text-dark'>Mentions</Link>
  <span className={`d-block  ${togle === 'Mentions' ? 'leni' : ''}`}></span>
  </button>
</div>
 </div>
  </div>
  <div className="pt-5 men">
    <p className="men__title fs-bold m-0 px-3 pt-5">Nothing to see here — yet</p>
    <p className="fs-4 px-5"> When someone mentions you, you’ll find it here.</p>
  </div>
    </div>
  )
}

export default Mentions