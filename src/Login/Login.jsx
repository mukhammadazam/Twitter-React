import { useRef } from 'react';
import AuthService from '../service/AuthService';
import './Login.scss';
const Login = () => {
  const loginEmail =useRef('')
  const loginPassword =useRef('')
  const login=(e)=>{
    e.preventDefault();
   AuthService.login(
    loginEmail.current.value,
    loginPassword.current.value,
   )
  }
  return (
    <div>
      <h2>Login</h2>
       <form onSubmit={login}  className="form  ">
        <input  className="d-block form__email   d-block" ref={loginEmail} type="email" placeholder="Email" />
        <input className="d-block form__password  d-block" ref={loginPassword} type="password" placeholder="password" />
        <button className="d-block form__btn  w-100 d-block" type="submit">Register</button>
   </form>
    </div>
  )
}

export default Login;