import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { auth } from './firebase';
import { currUser } from '../App';

const ProtectedRoute = () => {
  const {user}=useContext(currUser);
  if(!user){
    return <Navigate to='/'/>
  }
  return <Outlet/>;
}

export default ProtectedRoute;
