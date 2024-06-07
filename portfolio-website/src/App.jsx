import './App.css'
import About from './utils/about'
import Intro from './utils/intro'
import Navbar from './utils/navbar'
import Portfolio from './utils/portfolio'
import Skills from './utils/skills'

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About/>
      <Portfolio/>
      <Skills/>
    </>
  )
}

export default App
