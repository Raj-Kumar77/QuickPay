import React, { useState } from "react";
import Home from "./Home";
import { Route,Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Service from "./Pages/Service";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { createContext } from "react";

export const currUser = createContext(null);

function App() {
  const [user,setUser]=useState({});
  return (
    <>
    <currUser.Provider value={{user,setUser}}>
    <Routes>
      <Route element={<ProtectedRoute/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </currUser.Provider>
    </>
  );
}

export default App;
