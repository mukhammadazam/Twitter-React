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
import './LeftSahifa.scss';
const LeftSahifa = () => {
    return (
        <div className=" nav">
            <div className="d-flex  flex-column">
                <NavLink className='pb-4 pt-3'>
                    <img src={img5} alt="logo" />
                </NavLink>
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img11} alt="logo" />
                    <span className="leni">Home</span>
                </NavLink>
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img3} alt="logo" />
                    <span className="leni">Explore</span>
                </NavLink>

                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img8} alt="logo" />
                    <span className="leni">Notifications</span>
                </NavLink>
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img9} alt="logo" />
                    <span className="leni">Messages</span>
                </NavLink>

                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img2} alt="logo" />
                    <span className="leni">Bookmarks</span>
                </NavLink>
                
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img2} alt="logo" />
                    <span className="leni">Lists</span>
                </NavLink>
                
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img7} alt="logo" />
                    <span className="leni">Profile</span>
                </NavLink>
                
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <img className="img-svg" src={img6} alt="logo" />
                    <span className="leni">More</span>
                </NavLink>
                <NavLink className='wrapper text-decoration-none pb-4'>
                    <button className="wrapper__btn">Tweet</button>
                </NavLink>
                <NavLink className='text-decoration-none'>
                <div className="pro d-flex align-items-center justiify-content-center">
                <img className="img" src={img1} alt="bobur" />
                <div className="wrapper__enner">
                    <h6 className="m-0 wrapper__title">Bobur</h6>
                    <p className="wrapper__text m-0">@bobur_mavlonov</p>
                </div>
                <img className="d-block" src={img10} alt="malumotlar" />
            </div>
                </NavLink>
            </div>
           
        </div>

    )
}

export default LeftSahifa