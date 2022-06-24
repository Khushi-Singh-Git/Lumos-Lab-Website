import React from 'react';
import './index.css';
const About = () =>{
     return(
        <>
        <section id="header" className="">
        <div className="container-fulid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">

                <div className="col-md-6 pt-5 order-2 order-lg-1">
                <h1 style={{fontFamily: 'Inconsolata'}}><strong className="brand"> About Us</strong></h1> 
                <h5 className="my-3"  style={{textAlign:"justify",color:'white'}}>We are an innovation management company and we help connect innovators with industry-scale problems and enable them in their journey towards solving them.</h5>
                  <p style={{textAlign:"justify", fontFamily: 'Inconsolata',color:'white'}}>Lumos Labs is a Singapore-based innovation management firm that specialises in running tech-based open innovation programs.</p>
                  <p style={{textAlign:"justify", fontFamily: 'Inconsolata',color:'white'}}>Founded in 2018, we're driven by the potential of emerging technologies, sustainable growth and the entrepreneurial spirit, to host several programs for technology firms, corporates, governments and investment firms through accelerators and open innovation programs.</p>
                
                
                
               </div>

               <div className="animated col-lg-6 order-1 order-lg-2 mt-5">
                  <img  src="https://media-exp2.licdn.com/dms/image/C5622AQFlytxhPNYWnQ/feedshare-shrink_2048_1536/0/1652155904350?e=1658966400&v=beta&t=wJrfCn_gt6NFnwMcg3VOvQ28tP5xEdswq7anwAKSHXA"  alt='..' width="600px" height="400px" style={{marginTop:"60px",borderRadius:"50%",borderColor:"#3498db",borderStyle:"solid"}}/> </div>
                </div>
              </div>
          </div>
      </div>
        </section>


        <section id="header" className="">
        <div className="container-fulid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">

                <div className="col-md-6 pt-5 order-2 order-lg-1">
              
                <img src='https://media-exp2.licdn.com/dms/image/C5622AQGaxK6pRmS9RQ/feedshare-shrink_2048_1536/0/1652155904561?e=1658966400&v=beta&t=dDPV7GpJcIIgnypPCmi_newCB2MSerRhx7G0c9AfcVM'  alt='..' width="550px" height="400px" style={{marginTop:"60px",borderRadius:"50%",borderColor:"#3498db",borderStyle:"solid"}}/>              
             

                 <div className="mt-3 mt-5">
                     <button style={{borderRadius:"36px",backgroundColor:"#3498db",color:"white",margin:"10px",padding:"10px",marginLeft:"460px",width:"200px"}} ><a href="https://www.lumoslabs.co/" style={{color:"black",textDecorationLine:"none",fontSize:"30px",fontFamily:'IBM Plex Serif',}}>Contact us</a></button>
                 </div> 
               </div>
               <div className="animated col-lg-6 order-1 order-lg-2 mt-5"> 

                  <p style={{textAlign:"justify",marginTop:"150px", fontFamily: 'Inconsolata',color:"white"}} >​Lumos Labs is building a metaverse for builders and Web3 ecosystem enablers to share opportunities to build and scale-up. With a track record for aiding Web3 adoption among developer communities with programmes since 2018, Lumos Labs has built a strong developer community of 60K developers and is focused on elevating their Web3 journeys.</p>
                 
                </div>  
                </div>
              </div>
          </div>
      </div>
        </section>

<br></br><br></br><br></br>
<div class="footer" style={{display:"flex",justifyContent:"space-evenly",color:"white", fontFamily: 'Inconsolata',textAlign:"center"}}>
         <div>
       Have queries?
       <br></br> Reach out to us on the email below!
       <br></br>
       <a href="corporate@lumoslabs.co">corporate@lumoslabs.co</a></div>
       <div style={{ height: "130px",borderRight: "3px solid white",right: "50%"}}></div>
       <div>
       Join our community to transform your Web3 journey
       <br></br>
       <a href="https://discord.com/invite/XWj3ruPYsN" ><img src="https://cdn-icons-png.flaticon.com/128/906/906361.png" alt="image" height="50px" width="50px"></img></a>
       <br></br>
       Enter the Lumos Metaverse whitelist
       </div>
       <div style={{ height: "130px",borderRight: "3px solid white",right: "50%"}}></div>
       <div>
       Follow us on our socials to stay updated
       <div>
         <a href='https://www.linkedin.com/company/lumoslabs'><img src='https://cdn-icons-png.flaticon.com/128/185/185964.png' height="50px" width="50px" alt='.'></img></a> &nbsp;
         <a herf='https://www.instagram.com/'><img src='https://cdn-icons-png.flaticon.com/128/1409/1409946.png' height="50px" width="50px" alt='.' ></img></a> &nbsp;
         <a href='https://twitter.com/LabsLumos'><img src='https://cdn-icons-png.flaticon.com/128/124/124021.png' height="50px" width="50px" alt='.'></img></a>
       </div>
       © 2022 by Lumos Metaverse
       </div>
       </div>
       <br></br>
          <h6 style={{textAlign:"center",color:"white",fontFamily:"Amiri"}}> Made by Khushi ☺</h6>
   </>
   );
};

export default About;