import React from "react";
import {Route , Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Metaverse from "./Metaverse"
import Events from "./Events"
import './index.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () =>{
   
    return(
      <>
 <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<Navbar />
      
  <Routes>
 
    <Route path="/" element={<Home></Home>}/>
    <Route path="/About" element={<About></About>}/>
    <Route path="/Metaverse" element={<Metaverse></Metaverse>}/>
    <Route path="/Events" element={<Events></Events>}/>
    <Route path="/Contact" element={<Contact></Contact>}/>
  </Routes>
 
 

      </>
    );

};
export default App;






