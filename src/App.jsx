import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import CallMe from './components/CallMe'
import Experienc from './components/Experienc'
import Links from './components/Links'
import Portafolio from './components/Portafolio'
import Skill from './components/Skill'

function App() {
  const [onOff, setOnOff] = useState(true)
  const handleONOFF = () =>{
    setOnOff(!false)
    if (onOff==true) {
      console.log('true');
      setOnOff(false)
    }else{
      console.log('false');
      setOnOff(true)
    }
  }

  return (
    <div className={`App App_background_${onOff}`}>
        <Links />
          <div className='App_div'>
              <button onClick={handleONOFF} className='App_btn' >on/off</button>
          </div>
        <AboutMe />
        <Experienc />
        <Skill />
        <Portafolio />
       <CallMe />
       
    </div>
  )
}

export default App
