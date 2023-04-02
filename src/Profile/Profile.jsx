import {BsArrowLeft} from 'react-icons/bs'
import './profile.scss'
import { Link } from 'react-router-dom'
import bg from './Rectangle.png';
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
      <div className="pt-5">
        <img className='bg' src={bg} alt="background"/>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
        <p>jsw</p>
      </div>
    </>
  )
}

export default Profile