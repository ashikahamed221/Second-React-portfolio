import { ABOUT_TEXT } from '../constans/index'
import profile from '../assets/Untitled_design.png'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center fonts text-4xl'>
        About
        <span className='text-neutral-500 fonts'> Me</span>
      </motion.h2>
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' width={250} height={250} src={profile} alt="profilepic" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'>
          <div className=''>
            <p className='my-2 max-w-xl fonts py-6 md:mt-10'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
