import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Noti.scss';
import { FetchContext } from '../context/FitchConbonet';
const Notifications = (e) => {
const {data}=useContext(FetchContext);
console.log(data)
return (
<div className='d-block'>
<div className='div'>
    <h1 className='div__title'>Notifications</h1>
<div className="button d-flex">
  <button className="d-block  button__btn2">All
  <span className='d-block leni'></span>
  </button>
  <button className="d-block  button__btn3">Verified
  <span className='d-block leni'></span>
  </button>
  <button className="d-block  button__btn4">Mentions
  <span className='d-block leni'></span>
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