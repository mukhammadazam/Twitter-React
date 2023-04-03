import {BsArrowLeft} from 'react-icons/bs'
import {SiGooglemaps} from 'react-icons/si'
import {MdOutlineDateRange} from 'react-icons/md'
import './profile.scss'
import { Link } from 'react-router-dom'
import bg from './Rectangle.png';
import svg from './profile.svg';
const Profile = () => {
  return (
    <>

      <div className=" pr">
      <div className="d-flex align-items-center position-relative profil justify-content-between ">
<Link to='/' className='pb-3 text-dark'><BsArrowLeft className='fs-3 profil__icons  '/></Link>
<div className=" profil__param position-absolute">
  <p className="m-0 h5">
Bobur
  </p>
  <span className="d-block m-0 fs-5">1,070 Tweets</span>
</div>
      </div>
      </div>
      <div className="pt-5 ">
      <div className="position-relative">
      <img className='bg' src={bg} alt="background"/>
        <img className='position-absolute svg' src={svg} alt="svg" />
        <button className='editbtn'>Edit profile</button>
      </div>
       <div className="pt-5">
        <h2 className='ps-5 pt-3 m-0'>Bobur</h2>
        <Link  className='text-decoration-none text-dark d-block ps-5'>@bobur_mavlonov</Link>
        <p className='ps-5'>UX&UI designer at <Link to='https://abutech.uz/' target='_blank' className='text-decoration-none'>@abutechuz</Link></p>
       </div>
       <div className="d-md-flex gap-3 ps-3 d-none   align-items-center ">
        <div className="d-flex align-items-center">
          <SiGooglemaps/>
          <p className='m-0'>Mashag</p>
        </div>
        <Link className='text-decoration-none' >t.me/boburjon_mavlonov</Link>
        <p className='m-0'> November 24, 2000</p>
<div className="d-flex align-items-center">
  <MdOutlineDateRange/>
  <p className='m-0'>Joined May 2020</p>
</div>
       </div>
       <div className="ps-3 pt-2">
        <Link className='pe-5 text-decoration-none text-dark h5'>67 <span className='fs-6 text-secondary '>Following</span></Link>
        <Link to='/follow' className='text-decoration-none text-dark h5'>47 <span className='fs-6 text-secondary '> Followers</span></Link>
       </div>
      </div>
    </>
  )
}

export default Profile