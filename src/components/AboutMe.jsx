import React from 'react'
import resumenfla from '../assets/documents/resume.pdf'
import fotoresume from "../assets/documents/photomobile.png";//foto de prueva
import degree from '../assets/documents/degree.png'
import './style/aboutMe.css'
const AboutMe = () => {
  return (
    <div className='AbouteMe_main' id='home'>
         <div className='AbouteMe_main-foto'>
              <img src={degree} className='AbouteMe_main-img' alt="foto" />
              <p className='AbouteMe_main-p'><a href="#callme"><span className='AbouteMe_main-span'>Call me!...</span></a></p>
          </div>
          <div className='AbouteMe_main-div-name'>
                <h4>Flavio Hernandez jr</h4>
                <h4>electrical and electronic engineering degree</h4> 
                <h4>Developer Front-end</h4>
             
          </div>
         <article className='AbouteMe_article'>
            <h4 className='AbouteMe_article-h4'>
            Hello, I`m <span className='AbouteMe_main-span'>Front-End Developer</span> on React, a like to learn about code.
            </h4>
         </article>
          <div className='AbouteMe_main-div-a'>

                <div>
                    <a className='AbouteMe_main-a' href="https://www.linkedin.com/in/flavio-hernandez-jr-a0476b94/"> 
                      <i class="AbouteMe_main-i fa-brands fa-linkedin"></i>
                      <div className='AbouteMe_main-title-i'>Linkedin</div>
                    </a>
                </div>
                <div>
                  <a className='AbouteMe_main-a' href="https://www.linkedin.com/in/flavio-hernandez-jr-a0476b94/overlay/1635480020705/single-media-viewer/">
                      <i class="AbouteMe_main-i fa-solid fa-certificate"></i>
                      <div className='AbouteMe_main-title-i'>certificate/degree </div>
                  </a>
                </div>
                <div>
                    <a  className='AbouteMe_main-a' href={resumenfla} download={resumenfla}>
                      <i class="AbouteMe_main-i fa-solid fa-download"></i>
                      <div className='AbouteMe_main-title-i'>Resume</div>
                    </a>      
                </div>
                <div>
                    <a className='AbouteMe_main-a' href="https://certificates.academlo.com/en/verify/88627046547961">
                        <i class="AbouteMe_main-i fa-brands fa-react"></i>
                        <div className='AbouteMe_main-title-i'>React</div>
                    </a>
                </div>
                <div>
                    <a className='AbouteMe_main-a' href="https://certificates.academlo.com/en/verify/38591429720231">
                        <i class="AbouteMe_main-i fa-brands fa-node-js"></i>
                        <div className='AbouteMe_main-title-i'>JavaScript</div>
                    </a>
                </div>

          </div>
    </div>
  )
}

export default AboutMe