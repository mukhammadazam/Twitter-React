import septings from './imgs/settings.svg';
// import bola from './imges/bobur-ukasi.svg';
// import mushtariy from './imges/mushtariy.svg';
// import search from './imges/search.svg';
import uchnuqta from '../twitter/images/uchnuqta.svg';
import './Right.scss';
const Right = () => {
  return (
    <div className="right">
<input type="text" placeholder="Search Twitter" className="right__input" />
<div className="right__enner">
    <div className=" p-0 m-0 d-flex align-items-center ">
        <h5 className='right__enner--title'>Trends for you</h5>
        <img src={septings} alt="mnvhg" />
    </div>

    <div className=" p-0 m-0 d-flex align-items-center ">
        <h5 className='right__enner--title1 m-0'>Trending in Germany</h5>
        <img src={uchnuqta} alt="mnvhg" />
    </div>
    
    <p className="right__enner--title2 m-0"> Revolution </p>
    <span className='d-block right__enner--leni'>50.4K Tweets</span>


    <div className=" d-flex align-items-center ">
        <h5 className='right__enner--title1 m-0'>Trending in Germany</h5>
        <img src={uchnuqta} alt="mnvhg" />
    </div>
        <p className="right__enner--title2   m-0">
    Revolution
    </p>
    <span className='d-block right__enner--leni'>50.4K Tweets</span>
    <div className=" d-flex align-items-center ">
        <h5 className='right__enner--title1 m-0'>Trending in Germany</h5>
        <img src={uchnuqta} alt="mnvhg" />
    </div>  
    <p className="right__enner--title2   m-0">
    Revolution
    </p>
    <span className='d-block right__enner--leni'>50.4K Tweets</span>
    <button className='right__enner--btn'>Show more</button>
</div>
<div className="right__bottom">
    <h4 className="right__bottom--title">
    You might like
    </h4>
    
</div>
    </div>
  )
}

export default Right