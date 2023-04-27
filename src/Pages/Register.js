import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { async } from '@firebase/util';

const Register = () => {

  const navigate=useNavigate();
  const [registerEmail,setRegisterEmail]=useState('');
  const [registerPassword,setRegisterPassword]=useState('');

  const register= async(e)=>{
    try {
      e.preventDefault();
      const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      alert('registaration successful!!');
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100 p-5' style={{maxWidth:'40rem',fontSize:'1.5rem',border:'1px solid #ced4da',}}>
      <div className='row text-center mb-5'>
          <h1>Registration Page</h1>
        </div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setRegisterEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setRegisterPassword(e.target.value)}/>
  </div>
  <div className='mt-5 mb-3'>
  <button type="submit" class="btn btn-primary w-100 p-3" onClick={register}>Register</button>
  </div>
  <div className='mt-3'>
    <p>Already have an account? <NavLink to='/' className='text-danger'>Login</NavLink></p>
  </div>
</form>
      </div>
      </div>
    </>
  )
}

export default Register;
