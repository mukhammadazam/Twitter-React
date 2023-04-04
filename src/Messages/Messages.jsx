import {FiSettings} from 'react-icons/fi'
import {SlEnvolopeLetter} from 'react-icons/sl'
import { Link } from "react-router-dom"
import './Messages.scss'
const Messages = () => {
  return (
    <div>
      <div className="pb-5 d-flex masseg justify-content-between">
      <h3 className="">Messages</h3>
     <div className="">
     <Link className='text-dark'>
        <FiSettings className='fs-3 '/>
        </Link>
        <Link className='text-dark ps-3'><SlEnvolopeLetter className='fs-3'/></Link>
     </div>
    </div>
    <div className="d-block massage">
      <p className="massage__title text-center ">
      Welcome to your inbox!
      </p>
      <p className=' text-center'>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
      <button className='border-0 py-2 px-5  bg-primary rounded-pill text-white fs-5 massage__btn'>Write a massage</button>
    </div>
    </div>
  )
}

export default Messages