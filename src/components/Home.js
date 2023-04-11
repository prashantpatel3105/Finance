import React from 'react'
import Nav from './Nav'
import h1 from '../img/h1.png';
import About from './About';
import Project from './Project';
import Testimonial from './Testimonial';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Nav/>
  

          <div className="home-main">
                <div style={{paddingTop:'330px',textAlign:'center'}} className='text-home'>        
                <h1 style={{color:'white'}}>We offer financial wings to let your<br/> dreams soar higher!</h1>
              <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero<br/> et velit interdum, ac aliquet odio mattis. </p>
              <button className='btnhome'><b>Consultation</b></button>
              </div>


          </div>

            <Services/>

            <About/>

            <Project/>

            <Testimonial/>

            <Contact/>

            <Footer/>


    </div>
  )
}

export default Home
