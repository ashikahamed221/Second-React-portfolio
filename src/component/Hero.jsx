import { HERO_CONTENT } from '../constans'
import { motion } from "framer-motion"


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>

      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col lg:items-start'>
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-4xl font-thin tracking-tight lg:mt-16
            lg:text-8xl'>ASHIK
              <motion.span
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className='text-4xl font-thin lg:text-8xl'> AHAMED</motion.span>
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='text-3xl w-full font-sans bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>Passionate Full Stack Developer</motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className='my-2 max-w-xl fonts font-bold py-6 font-light'>{HERO_CONTENT}</motion.p>
              <div className='flex space-x-8 mb-8 fonts'>
                <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:258b0aef-13b3-42f8-a89f-8d1e75635552' className='px-4 py-3 border border-pink-500 hover:text-rose-400 text-white rounded'>Resume</a>
                <a href='https://www.hackerrank.com/profile/ashikahamed2217' className='px-4 py-3 border border-violet-700 text-white hover:text-indigo-600 rounded'>HackerRank</a>
              </div>

          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            {/* <img src={profilpic} alt="" /> */}
            <motion.img 
            initial={{x : 100, opacity: 0}}
            animate={{x : 0, opacity: 1}}
            transition={{duration:1, delay: 1.2}}
            src="src/assets/fullstack.gif" className='rounded'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

