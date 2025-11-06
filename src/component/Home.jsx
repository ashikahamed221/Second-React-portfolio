import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    
    <div className='min-h-screen  text-white flex flex-col items-center justify-center'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1}}
    className='md:text-4xl fonts flex flex-col'>Hi there 👋 It's me ASHIK AHAMED</motion.h1>
    
    <motion.p 
     whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1}}
    className='mt-4 md:text-3xl'>Welcome to My Portfolio</motion.p>
    
      <Link to='/ashikportfolio' className='md:text-2xl font-bold mt-6 bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 fonts px-4 py-2 rounded-lg'>Lets Go</Link>
   </div>

  )
}

export default Home
