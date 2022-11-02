import React from 'react'
import portaf from "../assets/documents/portafolio/portafolio.png";
import pokeapi from "../assets/documents/portafolio/pokeAapi.png";
import rickAndMorthy from "../assets/documents/portafolio/RickandMorthy.png";
import weather from "../assets/documents/portafolio/Weather.png";
import './style/Portafolio.css'

const Portafolio = () => {
  return (
    <div className='Portafolio' id='portafolio'>
        <h1>Portafolio</h1>
        <div className='Portafolio_containerallimg'>
            <div className='Portafolio_img-e-comer'>
                <a href="https://sprightly-zuccutto-c5d32e.netlify.app/">
                    <img  src={portaf} alt="portafolio" />
                </a>
            </div>
            <div className='Portafolio_img-e-comer'>
                <a href="https://effervescent-faloodeh-042c84.netlify.app/">
                    <img src={pokeapi} alt="pokeapi" />
                </a>
            </div>
            <div className='Portafolio_img-e-comer'>
                <a href="https://brilliant-puffpuff-1bcead.netlify.app/">
                    <img src={rickAndMorthy} alt="rickAndMorthy" />
                </a>
            </div>
            <div className='Portafolio_img-e-comer'>
                <a href="https://musical-centaur-c8bd4a.netlify.app/">
                    <img src={weather} alt="weather" />
                </a>
            </div>
        </div>
  
    </div>
  )
}

export default Portafolio