import React, { useState,useEffect,useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { Dropdown } from 'bootstrap';
import { auth } from './Pages/firebase';
import { onAuthStateChanged,signOut} from 'firebase/auth';
import { currUser } from './App';

const Navbar = () => {
  const {user,setUser}=useContext(currUser);
  const navigate=useNavigate();
    const [show,setShow]=useState(false);

    // const [user,setUser]=useState({});
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
  },[])

  const logout=async(e)=>{
    e.preventDefault();
    await signOut(auth);
    alert('Succefully logged out!!');
    navigate('/');
  }

  return (
    <>
    <section className='navbar-bg'>
      <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <NavLink class="navbar-brand" id='brand' to="/home">QuickPay</NavLink>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class={`collapse navbar-collapse ${show?"show":""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <form class="d-flex">
        {/* <button className="btn btn-style" type="submit">Sign Up</button> */}
        <button className="btn btn-style btn-border-style" type="submit" onClick={logout}>Log Out</button>

        <div class="dropdown">
  <button class="btn btn-secondary  btn-style btn-border-style" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    User
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink class="dropdown-item" href="#" style={{color:'red'}}>{user?user.email:"No Logged User"}</NavLink></li>
    <hr/>
    <li><NavLink class="dropdown-item" to='/' style={{color:'black'}}>Login</NavLink></li>
    <li><NavLink class="dropdown-item" to='/register' style={{color:'black'}}>Register</NavLink></li>
  </ul>
</div>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
};

export default Navbar;
