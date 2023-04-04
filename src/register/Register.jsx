import './Register.scss';
import { useRef } from "react"
import AuthService from '../service/AuthService';
const Register = () => {
    const name =useRef('')
    const email =useRef('')
    const password =useRef('')
    const avatar =useRef('')
    const register=async (e)=>{
e.preventDefault();
AuthService.register(
  name.current.value,
  email.current.value,
  password.current.value,
  avatar.current.value,
)
    }
  return (
    <div>
   <form onSubmit={register}  className="form  ">
   <input className="d-block  form__name d-block " ref={name} type="text" placeholder="Name"/>
        <input className="d-block form__email   d-block" value='a@gmail.com' ref={email} type="email" placeholder="Email" />
        <input className="d-block form__password  d-block" ref={password} type="password" placeholder="password" />
        <input className="d-block form__avatar   d-block" ref={avatar} type="url" placeholder="avatar" />
        <button className="d-block form__btn  w-100 d-block" type="submit">Register</button>
   </form>
    </div>
  )
}

export default Register