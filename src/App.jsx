import './App.css'
import AboutMe from './components/AboutMe'
import CallMe from './components/CallMe'
import Experienc from './components/Experienc'
import Links from './components/Links'
import Portafolio from './components/Portafolio'
import Skill from './components/Skill'

function App() {
  

  return (
    <div className="App">
        <Links />
        <AboutMe />
        <Experienc />
        <Skill />
        <Portafolio />
       <CallMe />
    </div>
  )
}

export default App
