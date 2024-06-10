import './App.css'
import About from './utils/about'
import Certificate from './utils/certificate'
import Footer from './utils/footer'
import Intro from './utils/intro'
import Navbar from './utils/navbar'
import Portfolio from './utils/portfolio'
import Skills from './utils/skills'


function App() {
  return (
    <>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Certificate />
        <Skills />
        <Footer />
    </>
  )
}

export default App
