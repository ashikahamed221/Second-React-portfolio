import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <div className='md:flex flex-row justify-around mt-20'>
        <div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.5 }}
            className='text-4xl bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>Portfolio</motion.h2>
          <p className='md:max-w-2/4 mt-4'>Passionate web developer creating modern, responsive, and user-friendly web applications.</p>
        </div>
        <div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.5 }}
            className='font-bold mt-8 md:mt-2'>Quick Links</motion.h2>
          <ul
            className='mt-4 fonts text-neutral-300'>
            <a href=""><li className='hover:text-rose-500'>Home</li></a>
            <a href=""><li className='hover:text-rose-500'>About</li></a>
            <a href=""><li className='hover:text-rose-500'>Skills</li></a>
            <a href=""><li className='hover:text-rose-500'>Experience</li></a>
            <a href=""><li className='hover:text-rose-500'>Project</li></a>
          </ul>
        </div>
        <div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -100 }}
            transition={{ duration: 0.5 }}
            className='font-bold md:mt-2 mt-6'>Connect</motion.h2>
          <div className='flex space-x-4 mt-4 text-3xl'>
            <a href='https://www.linkedin.com/in/ashikahamed05/'><FaLinkedin className='hover:text-slate-400' /></a>
            <a href='https://github.com/ashikahamed221'><FaGithub className='hover:text-slate-400' /></a>
            <a href='mailto:ashikahamed2217@gmail.com'><AiOutlineMail className='hover:text-slate-400' /></a>
            <a href='tel:+919094443206'><FaPhoneAlt className='hover:text-slate-400' /></a>
          </div>

        </div>
      </div>
      <h3 className='mt-30 text-center'>Made with ❤️ Ashik Ahamed</h3>
    </div>
  )
}

export default Footer
