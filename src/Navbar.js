import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>


        <nav className="navbar navbar-expand-lg navbar-light bg-dark"  >
  <div className="container-fluid">
  <NavLink to="/"> <img src='https://static.wixstatic.com/media/2d167d_d69aeb4d025149e7b982f84b43a9b9ff~mv2.png/v1/fill/w_294,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Lumos-Labs-Logo-(white).png' alt='pic' height="70px" width="200px"></img></NavLink>
    <NavLink className="navbar-brand" to="/" style={{color:"#3498db",fontFamily:"revert"}} >Lumos Labs</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</NavLink>
        </li>&nbsp;&nbsp;
        <li className="nav-item">
          <NavLink className="nav-link" to="/About" style={{color:"white"}}>About</NavLink>
        </li>&nbsp;&nbsp;
        <li className="nav-item">
          <NavLink className="nav-link" to="/Metaverse" style={{color:"white"}}>Metaverse</NavLink>
        </li>&nbsp;&nbsp;
        <li className="nav-item">
          <NavLink className="nav-link" to="/Events" style={{color:"white"}}>Events</NavLink>
        </li>&nbsp;&nbsp;
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact" style={{color:"white"}}>Contact</NavLink>
        </li>
        
       </ul>

    </div>
  </div>
</nav>

        
        </>
    );
};


export default Navbar;
