import { useContext,useState } from "react";
import { FetchContext } from "../context/FitchConbonet"
import { Link } from "react-router-dom";
import './Fetch.scss';
const Fetch = () => {
  const {data}=useContext(FetchContext);
  const [homeTogle,setHomeTogle] =useState('For you')
  const homeTogleFun=(param)=>{
    setHomeTogle(param)
  }
console.log(data)
  return (
    <div>
        <div className="hom__button ">
      <h1 className='hom__button--title '>Home</h1>
      <Link  onClick={()=>homeTogleFun('For you')} to='/'> <button  onClick={()=>homeTogleFun('For you')} className='hom__button--btn hom__button--bbttnn '>For you
        <span className={`hom__leni ${homeTogle === 'For you' ? 'hom__leni1' : ''}`}></span>
        </button></Link>
      <Link onClick={()=>homeTogleFun('Following')} to='/Following'>
        <button onClick={()=>homeTogleFun('Following')}   className='hom__button--btn1 '>Following
        <span className={`hom__leni ${homeTogle === 'Following' ? 'hom__leni1' : ''}`}></span>
        
        </button>
      </Link>
        
        </div>
        <div >
          {data.map((mal,index)=>(
<div className="fetch pb-5 d-flex align-items-center justify-content-evenly px-3" key={index}>
<img className="fetch__img border rounded-pill" src={mal.urlToImage} alt={mal.url} width='70px' height='70px' />
<div className="">
<p className="m-0">{mal.title.slice(0,40)}</p>
<Link className="m-0 text-decoration-none" target="_blank" to={mal.url.slice(0,50)}>{mal.url.slice(0,40)}</Link>
</div>
<button className="fetch__btn border-0">
  <span>Follow</span>
  <span className="d-none">Following</span>
</button>
</div>
))}
        </div>
    </div>)
  
}

export default Fetch