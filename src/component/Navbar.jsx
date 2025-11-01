import React, { useState } from 'react'

const Navbar = () => {

  return (
    
    <div className='flex flex-col items-center max-w-7xl mx-auto z-50'>
      <div>
        <ul className='flex space-x-7  mt-10 md:text-2xl bg-neutral-100 font-bold shadow-amber-50 py-2 px-4 rounded-full'>
            <a href='#'><li className='hover:border-b-3 hover:border-black hover:duration-100 ease-in-out font-thin  bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>Home</li></a>
            <a href='#'><li className='hover:border-b-3 hover:border-black hover:duration-100 ease-in-out font-thin  bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>About</li></a>
            <a href='#'><li className='hover:border-b-3 hover:border-black hover:duration-100 ease-in-out font-thin  bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>Skills</li></a>
            <a href='#'><li className='hover:border-b-3 hover:border-black hover:duration-100 ease-in-out font-thin  bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 bg-clip-text text-transparent'>Project</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
