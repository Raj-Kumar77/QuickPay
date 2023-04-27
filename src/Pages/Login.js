import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

const Login = () => {
  const [loginEmail,setLoginEmail]=useState('');
  const [loginPassword,setLoginPassword]=useState('');
  const navigate=useNavigate();

  const login=async(e)=>{
    e.preventDefault();
    try {
      const user=await signInWithEmailAndPassword( auth,loginEmail,loginPassword);
      navigate('/home');
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100 p-5' style={{maxWidth:'40rem',fontSize:'1.5rem',border:'1px solid #ced4da',}}>
        <div className='row text-center mb-5'>
          <h1>Login Page</h1>
        </div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setLoginEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setLoginPassword(e.target.value)}/>
  </div>
  <div className='mt-5 mb-3'>
  <button class="btn btn-primary w-100 p-3" onClick={login}>Login</button>
  </div>
  <div className='mt-3'>
    <p>Don't have an account? <NavLink to='/register' className='text-danger'>Register</NavLink></p>
  </div>
</form>
      </div>
      </div>
    </>
  )
}

export default Login;
