import React from "react";
import ham from "../../icons/ham.png";
import logoutIcon from "../../icons/logout.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="subnavbar">
      <div className="leftnav">
        <img src={ham} className='navbarIcons' alt=" " />
        <p style={{color:"white" ,marginLeft:"14px", marginTop:12}}> Hello Admin</p>
      </div>
      <div className="cursor-pointer ">
        <img src={logoutIcon} className='navbarIcons' alt='' />
      </div>
    </div>
   </div>
  );
};



export default Navbar;
