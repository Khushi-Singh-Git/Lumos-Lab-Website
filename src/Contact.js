import React from 'react';

const Contact = () =>{
     return(
     <>
     <br></br><br></br>
     <div style={{textAlign:"center"}}>
     <h1 style={{color:"#1bd0e0",fontFamily:"Cormorant Garamond",fontSize:"60px"}}>Any questions or remarks ? Just write us a message</h1><br></br>
     <div class="mb-3">
  <h4 style={{color:"white",textAlign:"left"}}>Email</h4>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="sample@gmail.com"></input><br></br>
</div>
<div class="mb-3">
  <h4 style={{color:"white",textAlign:"left"}}>Enter your message here</h4>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br></br>
  <button type="button" class="btn btn-dark" style={{fontSize:"20px"}}>Submit</button><br></br><br></br>
</div>
     </div>
     
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

export default Contact;