import React from 'react'
import f1 from '../img/f1.png'
import f2 from '../img/f2.png'
import f3 from '../img/f3.png'
import f4 from '../img/f4.png'
import f5 from '../img/f5.png'
import f6 from '../img/f6.png'
import f7 from '../img/f7.png'
import f8 from '../img/f8.png'



const Footer = () => {
  return (

    <>
   
            <div className="footer-main">
         
                <div className="container">
                    <div style={{justifyContent:'center',marginTop:'100px'}} className="row">
                        <div className="col-lg-2">
                        <img style={{display:'block',margin:'auto'}}  src={f1}/>
                <h5 style={{color:'white',textAlign:'center'}} >Our Location</h5>
                <p  style={{color:'white',textAlign:'center'}} >795 South Park, Wonderlan<br/>
                     CA 94107, Australia</p>
                        </div>
                        <div className="col-lg-2">
                        <img style={{display:'block',margin:'auto'}} src={f2}/>
                <h5 style={{color:'white',textAlign:'center'}}>Our Phones</h5>
                <p style={{color:'white',textAlign:'center'}}>+3695-548555 - Office<br/>
                 +3695-548555 - Fax<br/></p>
                            </div>
                            <div className="col-lg-2">
                            <img style={{display:'block',margin:'auto'}} src={f3}/>
                <h5 style={{color:'white',textAlign:'center'}}>Our Emails</h5>
                <p style={{color:'white',textAlign:'center'}}>Support@sitename.com<br/>Info@sitename.com</p>
                            </div>
                    </div>
                    <hr style={{border:'2px solid white'}}/>
                    <div style={{justifyContent:'center'}} className="row">
                        <div className="col-lg-9">
                            <p id='foot-icon' style={{color:'white'}}>2022 © Consults. All rights reserved.</p>
                        </div>
                        <div className="col-lg-3">
                            <div  id='foot-icon2' >                       
                         <img style={{marginLeft:'10px'}} src={f5}/>
                        <img style={{marginLeft:'10px'}} src={f6}/>
                        <img style={{marginLeft:'10px'}} src={f7}/>
                        <img style={{marginLeft:'10px'}} src={f8}/>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
    </>
    
)
}


export default Footer
