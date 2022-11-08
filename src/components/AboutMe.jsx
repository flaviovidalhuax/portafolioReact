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
              <p className='AbouteMe_main-p'>call me!</p>
          </div>
          <div className='AbouteMe_main-div-name'>
              <div>
                <h4>Flavio Hernandez jr</h4>
                <h4>Ing. Electrico Electronico</h4> 
                <h4>Desarrolador Front-end</h4>
        
              </div>
          </div>
         <article className='AbouteMe_article'>
            <p>
              Estudie la carrera de Ingenieria electrica egresado de UNAM FES ARAGON, 
              me especialice en eletronica y de ahi nacio el gusto por la programacion.

              Soy originario de Oaxaca de una comunidad pequeña por la region mixteca baja,
              por usos y costumbres fui a servir por 2 años el cargo de presidente para realizar 
              muchas actividades de las cuales me hacen sentir orgulloso por contribuir a mi comunidad.
              Fui a trabajar y estudiar ingles en 2019 con el fin de tratar  de dominar el idioma inglesen la ciudad de 
              de Chicago, IL, USA. 
            </p>
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