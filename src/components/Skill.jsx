import React from 'react'
import './style/skill.css'

const Skill = () => {
    
  return (
    <div className='skill' id='skill1'>
        <h2 className='skill_main-title'>Front-end</h2>   
               
          <div className='skill_allcoantainer'>
                  <div className='skill_container-item'>
                      <i style={{color:'#EFD830'}} class="skill_item fa-brands fa-square-js"></i> 
                      <span className='skill_span'>JavaScript</span>
                  </div>
                  <div className='skill_container-item'>
                      <i style={{color:'#1F5FAA'}} class="skill_item fa-brands fa-css3"></i>
                      <span className='skill_span'>Css</span>
                  </div>
                  <div className='skill_container-item'>
                      <i style={{color:'#E9622E'}}  class="skill_item fa-brands fa-html5"></i>
                      <span className='skill_span'>HTML</span>
                  </div>
                  <div className='skill_container-item'>
                      <i style={{color:'##5D3C7F'}}  class="skill_item fa-brands fa-bootstrap"></i>
                      <span className='skill_span'>bootstrap</span>
                  </div>
                  <div className='skill_container-item'>
                      <i style={{color:'#5ED3F3'}} class="skill_item fa-brands fa-react"></i>
                      <span className='skill_span'>React</span>
                  </div>
          </div>

    </div>
  )
}

export default Skill