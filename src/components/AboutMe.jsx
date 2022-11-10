import React from 'react'
import resumenEnglish from '../assets/documents/resumeEnglish.pdf'
import resumenEspañol from '../assets/documents/resumeSpanol.pdf'
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
                      <i style={{color:'#0A66C2'}} class="AbouteMe_main-i fa-brands fa-linkedin"></i>
                      <div className='AbouteMe_main-title-i'>Linkedin</div>
                    </a>
                </div>
                <div>
                  <a className='AbouteMe_main-a' href="https://www.linkedin.com/in/flavio-hernandez-jr-a0476b94/overlay/1635480020705/single-media-viewer/">
                      <i style={{color:'#FFF9B0'}} class="AbouteMe_main-i fa-solid fa-certificate"></i>
                      <div className='AbouteMe_main-title-i'>certificate/degree </div>
                  </a>
                </div>
                <div>
                    <a  className='AbouteMe_main-a' href={resumenEnglish} download={resumenEnglish}>
                      <i style={{color:'#B9E0FF'}} class="AbouteMe_main-i fa-solid fa-download"></i>
                      <div className='AbouteMe_main-title-i'>Resume English</div>
                    </a>      
                </div>
                <div>
                    <a  className='AbouteMe_main-a' href={resumenEspañol} download={resumenEspañol}>
                      <i style={{color:'#8D9EFF'}} class="AbouteMe_main-i fa-solid fa-download"></i>
                      <div className='AbouteMe_main-title-i'>Resume Spanish</div>
                    </a>      
                </div>
                <div>
                    <a className='AbouteMe_main-a' href="https://certificates.academlo.com/en/verify/88627046547961">
                        <i style={{color:'#5ED3F3'}} class="AbouteMe_main-i fa-brands fa-react"></i>
                        <div className='AbouteMe_main-title-i'>React</div>
                    </a>
                </div>
                <div>
                    <a className='AbouteMe_main-a' href="https://certificates.academlo.com/en/verify/38591429720231">
                        <i style={{color:'#EFD830'}} class="AbouteMe_main-i fa-brands fa-node-js"></i>
                        <div className='AbouteMe_main-title-i'>JavaScript</div>
                    </a>
                </div>

          </div>
    </div>
  )
}

export default AboutMe