import { MyContext } from '../context/Context';
import { useContext } from 'react'
import septings from './imgs/settings.svg';
import bola from './imgs/bobur-ukasi.svg';
import mushtariy from './imgs/mushtariy.svg';
// import search from './imgs/search.svg';-
import uchnuqta from '../twitter/images/uchnuqta.svg';
import './Right.scss';
const Right = () => {
    const { counter8, funCount8, counter9, funCount9 } = useContext(MyContext);
    return (
        <div className="right flex-1">
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
                <div className=" d-flex align-items-center ">
                    <img className="" src={mushtariy} alt="bobur" />
                    <div className="follow1">
                        <p className="m-0 wrapper__title">Mushtariy</p>
                        <p className="wrapper__text m-0"> @@Mushtar565266 </p>
                    </div>
                    <button onClick={funCount8} className={`d-block right__bottom--btn ${counter8 ? 'd-block' : 'd-none'}`}>Follow</button>
                    <button onClick={funCount8} className={`d-block right__bottom--btn position-absolute end-0 ${counter8 ? 'd-none' : 'd-block right__bottom--btn--bg'}`}>Following</button>
                </div>
                <div className=" pt-3 d-flex align-items-center  ">
                    <img className="" src={bola} alt="bobur" />
                    <div className="follow">
                        <p className="m-0 wrapper__title">Shuhratbek</p>
                        <p className="wrapper__text m-0"> @mrshukhrat </p>
                    </div>
                    <button onClick={funCount9} className={`right__bottom--btn ${counter9 ? 'd-block ' : 'd-none btn--bg'}`}>Follow</button>
                    <button onClick={funCount9} className={`right__bottom--btn position-absolute end-0 ${counter9 ? 'd-none ' : 'd-block right__bottom--btn--bg'}`}>Following</button>
                </div>

                <button className="right__bottom--btn1">Show more</button>
            </div>
        </div>
    )
}

export default Right