import React from 'react';
import './index.css';
const Home = () =>{
     return(
<>
        <section id="header" className="" >
        <div className="container-fulid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">

                <div className="col-md-6 pt-5 order-2 order-lg-1" style={{fontFamily: 'Inconsolata'}}>          
                 <h1><strong className="brand" style={{color:"#3498db"}}> Lumos Labs</strong></h1> <br></br>
                 <h4 className="my-3" style={{textAlign:"justify",color:"white"}}>We help Web3 founders source, interview and hire Web3 engineers that are leading innovation in the space.</h4>
                 <div className="mt-3 mt-5">
                    <button style={{borderRadius:"36px",backgroundColor:"#3498db",color:"white",margin:"10px",padding:"10px"}} ><a href="https://www.lumoslabs.co/" style={{color:"black",textDecorationLine:"none",fontSize:"30px",fontFamily:'IBM Plex Serif'}}>Contact us</a></button>
           <br></br><br></br><br></br>
                 </div> 
               </div>

               <div className="animated col-lg-6 order-1 order-lg-2 mt-5">
                  <img src="https://media-exp2.licdn.com/dms/image/C560BAQEjt8XUMTB56Q/company-logo_200_200/0/1598256663440?e=1663804800&v=beta&t=V89X_N-mnsD6SsjsWI2hENPGbSkc4Ml4a6r6D5Y5g4U" width="400px" height="400px" alt=".." style={{borderRadius:"50%",marginLeft: "auto",  marginRight: "auto",display: "block"}}/>   
                </div>  
                </div>
              </div>
          </div>
      </div>
        </section>
        <h6 style={{textAlign:"center",color:"white",fontFamily:"Amiri"}}> Made by Khushi ☺</h6>


   </>
   );
};

export default Home;