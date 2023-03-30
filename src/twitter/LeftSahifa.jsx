import {MyContext} from '../context/Context'; 
import {useContext} from 'react';
import { NavLink } from "react-router-dom"
import img1 from './images/bobur.svg';
import img2 from './images/chat.svg';
import img3 from './images/hashtag.svg';
import img4 from './images/lists.svg';
import img5 from './images/logo.svg';
import img6 from './images/more.svg';
import img7 from './images/profile.svg';
import img8 from './images/qungiroq.svg';
import img9 from './images/sms.svg';
import img10 from './images/uchnuqta.svg';
import img11 from './images/uycha.svg';
import btn from './images/ur.png';
import './LeftSahifa.scss';
const LeftSahifa = () => {
    const {counter,funCount,funCount1,counter1,funCount2,counter2,funCount3,counter3,
    funCount4,counter4,counter5,funCount5,counter6,funCount6,
    counter7,funCount7}=useContext(MyContext);
    return (
        <div className=" nav flex-1">
            <div className="d-flex  nav_enner flex-column">
                <NavLink className='pb-4 pt-3'>
                    <img src={img5} alt="logo" />
                </NavLink>
                <NavLink onClick={funCount1}  className={`  wrapper text-decoration-none pb-4`}>
                    <img className={`img-svg ${counter1 ? 'imgactiv' : 'img-svg'}`} src={img11} alt="logo" />
                    <span  className={`leni ${counter1 ? 'activ' : 'leni'} `}>Home</span>
                </NavLink>
                <NavLink onClick={funCount}  className='wrapper text-decoration-none pb-4'>
                    <img  className={`img-svg ${counter ? 'imgactiv1' : 'img-svg'}`} src={img3} alt="logo" />
                    <span  className={`leni ${counter ? 'activ' : 'leni'} `}>Explore</span>
                </NavLink>

                <NavLink onClick={funCount2}  className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter2 ? 'imgactiv1' : 'img-svg'}`} src={img8} alt="logo" />
                    <span onClick={funCount2} className={`leni ${counter2 ? 'activ' : 'leni'} `}>Notifications</span>
                </NavLink>
                <NavLink onClick={funCount3} className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter3 ? 'imgactiv1' : 'img-svg'}`} src={img9} alt="logo" />
                    <span className={`leni ${counter3 ? 'activ' : 'leni'} `}>Messages</span>
                </NavLink>

                <NavLink onClick={funCount4} className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter4 ? 'imgactiv1' : 'img-svg'}`} src={img2} alt="logo" />
                    <span className={`leni ${counter4 ? 'activ' : 'leni'} `}>Bookmarks</span>
                </NavLink>
                
                <NavLink onClick={funCount5} className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter5 ? 'imgactiv1' : 'img-svg'}`} src={img2} alt="logo" />
                    <span className={`leni ${counter5 ? 'activ' : 'leni'} `}>Lists</span>
                </NavLink>
                
                <NavLink onClick={funCount6} className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter6 ? 'imgactiv1' : 'img-svg'}`} src={img7} alt="logo" />
                    <span className={`leni ${counter6 ? 'activ' : 'leni'} `}>Profile</span>
                </NavLink>
                
                <NavLink onClick={funCount7} className='wrapper text-decoration-none pb-4'>
                    <img className={`img-svg ${counter7 ? 'imgactiv1' : 'img-svg'}`} src={img6} alt="logo" />
                    <span className={`leni ${counter7 ? 'activ' : 'leni'} `}>More</span>
                </NavLink>
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <button className="wrapper__btn d-none d-xl-block">Tweet  </button>
                    <img className="d-xl-none pe-2" src={btn} alt="btn" width='50px' height='50px' />
                </NavLink>
                <NavLink className='text-decoration-none'>
                <div className="pro pt-5 d-flex align-items-center justiify-content-center">
                <img className="img" src={img1} alt="bobur" />
                <div className="wrapper__enner d-xl-block d-none">
                    <h6 className="m-0 wrapper__title">Bobur</h6>
                    <p className="wrapper__text m-0">@bobur_mavlonov</p>
                </div>
                <img className="d-none  d-xl-block " src={img10} alt="malumotlar" />
            </div>
                </NavLink>
            </div>
           
        </div>

    )
}

export default LeftSahifa