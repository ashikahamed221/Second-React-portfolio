import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
const Nav = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center'>
        <h1 className='font-thin text-4xl text-gradient-to-r'>
          AA
        </h1>
      </div>

      <div className='m-8 flex items-center justify-center gap-8 text-2xl'>
        <a href='https://www.linkedin.com/in/ashikahamed05/'><FaLinkedin className='hover:text-slate-400' /></a>
        <a href='https://github.com/ashikahamed221'><FaGithub className='hover:text-slate-400' /></a>
        <a href='mailto:ashikahamed2217@gmail.com'><AiOutlineMail className='hover:text-slate-400' /></a>
        <a href='tel:+919094443206'><FaPhoneAlt className='hover:text-slate-400' /></a>
      </div>
    </nav>
  )
}

export default Nav
