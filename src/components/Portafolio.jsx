import React from 'react'
import portaf from "../assets/documents/portafolio/portafolio.png";
import pokeapi from "../assets/documents/portafolio/pokeAapi.png";
import rickAndMorthy from "../assets/documents/portafolio/RickandMorthy.png";
import weather from "../assets/documents/portafolio/Weather.png";
import './style/portafolio.css'

const Portafolio = () => {
  return (
    <div className='Portafolio' id='portafolio'>
        <h1>Briefcase</h1>
        <div className='Portafolio_containerallimg'>
            <div className='Portafolio_img-e-comer'>
                <div className='Portafolio_img-e-comer1'>
                            <img className='Portafolio_img' src={portaf} alt="portafolio" />
                    <div className='Portafolio_img-e-comer1-hijo'>
                            <button className='Portafolio_img-btn'>
                                <a href="https://github.com/flaviovidalhuax/reackecomer">
                                 <i class="fa-solid fa-file-code"></i>
                                </a>
                            </button> 
                            <button className='Portafolio_img-btn'>
                                <a href="https://sprightly-zuccutto-c5d32e.netlify.app/">
                                <i class="fa-brands fa-github"></i>
                                </a>
                            </button>
                    </div>
                </div>
            </div>
        <div className='Portafolio_img-e-comer'>
             <div className='Portafolio_img-e-comer1'>
                <img className='Portafolio_img' src={pokeapi} alt="pokeapi" />
                <div className='Portafolio_img-e-comer1-hijo'>
                        <button className='Portafolio_img-btn'>
                             <a href="https://github.com/flaviovidalhuax/lastpokeapi">
                                <i class="fa-solid fa-file-code"></i>
                            </a>
                        </button> 
                        <button className='Portafolio_img-btn'>
                            <a href="https://effervescent-faloodeh-042c84.netlify.app/">
                                 <i class="fa-brands fa-github"></i>
                            </a>
                        </button>
                </div>
            </div>
        </div>

        <div className='Portafolio_img-e-comer'>
             <div className='Portafolio_img-e-comer1'>
             <img className='Portafolio_img' src={rickAndMorthy} alt="rickAndMorthy" />
                <div className='Portafolio_img-e-comer1-hijo'>
                        <button className='Portafolio_img-btn'>
                             <a href="https://github.com/flaviovidalhuax/rickandmorty">
                             <i class="fa-solid fa-file-code"></i>
                            </a>
                        </button> 
                        <button className='Portafolio_img-btn'>
                            <a href="https://brilliant-puffpuff-1bcead.netlify.app/">
                            <i class="fa-brands fa-github"></i>
                            </a>
                        </button>
                </div>
            </div>
        </div>

        <div className='Portafolio_img-e-comer'>
             <div className='Portafolio_img-e-comer1'>
             <img className='Portafolio_img' src={weather} alt="weather" />
                <div className='Portafolio_img-e-comer1-hijo'>
                        <button className='Portafolio_img-btn'>
                             <a href="https://github.com/flaviovidalhuax/weather">
                             <i class="fa-solid fa-file-code"></i>
                            </a>
                        </button> 
                        <button className='Portafolio_img-btn'>
                            <a href="https://musical-centaur-c8bd4a.netlify.app/">
                            <i class="fa-brands fa-github"></i>
                            </a>
                        </button>
                </div>
            </div>
        </div>

        </div>
  
    </div>
  )
}

export default Portafolio