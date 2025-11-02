import React from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Navbar from './component/Navbar'
import Techsection from './component/Techsection'
import Expreience from './component/Expreience'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import {motion} from 'framer-motion'
const App = () => {
   
  // const { scrollYProgress } = useScroll();

  return (
    <div className='overflow-x-hidden text-neutral-100 antialiased max-h-screen'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    {/* <motion.div style={{ scaleX: scrollYProgress }} />   */}
      <div className=' container mx-auto px-8'>
        <Nav />
        <Hero />
        <About />
        <Techsection />
        <Expreience />
        <Project />
        <Contact />
        <Footer />
      </div>

       
    </div>
    
  )
}

export default App
