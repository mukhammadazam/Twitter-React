import {BsArrowLeft} from 'react-icons/bs'
import {SiGooglemaps} from 'react-icons/si'
import {MdOutlineDateRange} from 'react-icons/md'
import {GoKebabHorizontal} from 'react-icons/go'
import {VscCommentDraft} from 'react-icons/vsc';
import {TfiExport} from 'react-icons/tfi';
import {IoMdGitCompare} from 'react-icons/io';
import {RiDislikeLine} from 'react-icons/ri';
import {ImStatsBars} from 'react-icons/im';
import './profile.scss'
import { Link } from 'react-router-dom'
import bg from './Rectangle.png';
import svg from './profile.svg';
import image from './image.png';
const Profile = () => {
  return (
    <>
      <div className=" pr ">
      <div className="d-flex  align-items-center position-relative profil justify-content-between ">
<Link to='/' className='pb-3 text-dark'><BsArrowLeft className='fs-3 profil__icons  '/></Link>
<div className="  profil__param position-absolute">
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
        <Link to='/fol' className='pe-5 text-decoration-none text-dark h5'>67 <span className='fs-6 text-secondary '>Following</span></Link>
        <Link to='/follow' className='text-decoration-none text-dark h5'>47 <span className='fs-6 text-secondary '> Followers</span></Link>
       </div>
       <div className="btns pt-5">
     <Link>
     <button className='w-25 border-0 py-3 fs-5'>Tweets</button>
     </Link>     
     <Link>
     <button className='w-25 border-0 py-3 fs-5'>Tweets <span className='d-none d-xl-inline'> & replies</span></button>
     </Link>   
     <Link>
     <button className='w-25 border-0 py-3 fs-5'>Media</button>
     </Link>   
     <Link>
     <button className='w-25 border-0 py-3 fs-5'>Likes</button>
     </Link>     
        </div>
        <div className="paragrif pt-4 d-flex px-2 ">
          <img className='pe-2' src={svg} alt="svg" width='60' height='60' />
          <div className="">
            <div className="d-flex align-items-center">
            <h6 className='m-0 pe-2'>Bobur</h6>
            <Link className='text-decoration-none'>@bobur_mavlonov · Apr 1</Link>
            </div>
            <p className="">
            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim
            </p>
          </div>
<Link><GoKebabHorizontal className='fs-4 text-dark'/></Link>
        </div>
        <div className=" pb-5 d-flex align-items-center justify-content-between px-5 ms-3 me-5">
          <Link className='text-decoration-none text-dark'><VscCommentDraft className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><IoMdGitCompare className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><RiDislikeLine className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><ImStatsBars className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><TfiExport className='fs-4'/></Link>
        </div>
        <div className="paragrif pt-4 d-flex px-2 ">
          <img className='pe-2' src={svg} alt="svg" width='60' height='60' />
          <div className="">
            <div className="d-flex align-items-center">
            <h6 className='m-0 pe-2'>Bobur</h6>
            <Link className='text-decoration-none'>@bobur_mavlonov · Apr 1</Link>
            </div>
            <p className="">
            Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
<br />
<br />
Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
<br />
<br />
Gap faqat biznes trenerlar haqida emas.
            </p>
          </div>
<Link><GoKebabHorizontal className='fs-4 text-dark'/></Link>
        </div>
        <div className=" pb-5 d-flex align-items-center justify-content-between px-5 ms-3 me-5">
          <Link className='text-decoration-none text-dark'><VscCommentDraft className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><IoMdGitCompare className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><RiDislikeLine className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><ImStatsBars className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><TfiExport className='fs-4'/></Link>
        </div>
        <div className="paragrif pt-4 d-flex px-2 ">
          <img className='pe-2' src={svg} alt="svg" width='60' height='60' />
          <div className="">
            <div className="d-flex align-items-center pe-5 ">
            <h6 className='m-0 pe-2'>Bobur</h6>
            <Link className='text-decoration-none'>@bobur_mavlonov · Apr 1</Link>
            </div>
            <p className="">
            A bo'pti maskamasman
            </p>
          </div>
<Link className='ps-5'><GoKebabHorizontal className='fs-4  text-dark'/></Link>
        </div>
<div className="pb-3  ">
<img className='max' src={image} alt="image"  />
</div>
        <div className=" pb-5 d-flex align-items-center justify-content-between px-5 ms-3 me-5">
          <Link className='text-decoration-none text-dark'><VscCommentDraft className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><IoMdGitCompare className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark '><RiDislikeLine className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><ImStatsBars className='fs-4'/></Link>
          <Link className='text-decoration-none text-dark'><TfiExport className='fs-4'/></Link>
        </div>
      </div>
     
    </>
  )
}

export default Profile