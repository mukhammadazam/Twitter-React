import { useContext, useState } from 'react';
import './hom.scss';
import { FetchContext } from '../context/FitchConbonet';
import { Link } from 'react-router-dom';
import {VscCommentDraft} from 'react-icons/vsc';
import {TfiExport} from 'react-icons/tfi';
import {IoMdGitCompare} from 'react-icons/io';
import {RiDislikeLine} from 'react-icons/ri';
import {ImStatsBars} from 'react-icons/im';
const Home = () => {
  const {data} = useContext(FetchContext);
  const [homeTogle,setHomeTogle] =useState('For you')
  const homeTogleFun=(param)=>{
    setHomeTogle(param)
  }
  return (
    <div className=" hom flex-2">
        <div className="hom__button ">
      <h1 className='hom__button--title '>Home</h1>
      <Link to='/'> <button onClick={()=>homeTogleFun('For you')} className='hom__button--btn hom__button--bbttnn '>For you
        <span className={`hom__leni ${homeTogle === 'For you' ? 'hom__leni1' : ''}`}></span>
        </button></Link>
      <Link to='/Following'>
        <button  onClick={()=>homeTogleFun('Following')} className='hom__button--btn1 '>Following
        <span className={`hom__leni ${homeTogle === 'Following' ? 'hom__leni1' : ''}`}></span>
        
        </button>
      </Link>
        
        </div>
        <div className="row justify-content-center ps-0 ps-sm-3 ps-sm-0 row__enner">
          {
            data.map((el)=>(
              <div className="col pb-5 row__enner justify-content-center ">
                <img className='img1' src={el.urlToImage} alt={el.author}  />
              <div className=" icons d-flex align-items-center justify-content-between">
              <Link >  <VscCommentDraft className='fs-3 icons__sms bg-transparent'/></Link>
              <Link><IoMdGitCompare className='fs-3 icons__retvet' /></Link>
              <Link><RiDislikeLine className='fs-3  icons__like'/></Link>
              <Link><ImStatsBars className='fs-3 icons__statestika'/></Link>
               <Link> <TfiExport className='fs-3 icons__post bg-transparent'/></Link>
              </div>
                <div className="d-flex align-items-start pt-3 px-3 ">
                <img className='img' src={el.urlToImage} alt={el.author} />
                <div className="ps-2">
                <h2 className='row__enner--title'>{el.title.slice(0,70)}</h2>
                <p className="row__enner--text">{el.description}</p>
                </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home