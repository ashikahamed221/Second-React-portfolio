import React from 'react'
import { CONTACT } from '../constans'
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20 '>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='text-center my-10 text-4xl'>Get in Touch</motion.h2>
            <div className='text-center tracking-tighter'>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}

                    className='my-4'><span className='font-bold'>
                       📍Location : </span>{CONTACT.Location}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4'><span className='font-bold'>📞Contact : </span>{CONTACT.phoneNo}</motion.p>
                <a href='mailto:ashikahamed2217@gmail.com'><p className='my-4 hover:underline'><span className='font-bold'>📩 Email : </span>{CONTACT.email}</p></a>


            </div>
            <div className='mt-25 flex flex-col items-center'>
                <form className=' p-6 rounded-2xl border '>
                    <label htmlFor="" className='flex flex-row'>Name</label>
                    <input type="text" required className='bg-neutral-300 py-2 px-6 fonts font-bold md:w-100 rounded text-black mt-3
                    hover:border-blue-600' placeholder='Enter Your Name' />

                    <label htmlFor="" className='flex flex-row mt-4'>Email </label>
                    <input type="text" required className='bg-neutral-300 fonts py-2 px-6 md:w-100 rounded text-black mt-3' placeholder='Enter Your Name' />

                    <label htmlFor="" className='flex flex-row mt-4'>Message </label>

                    <textarea name="message" required className='w-59 mt-4 fonts md:w-100 bg-neutral-300 p-2 text-black rounded h-50' placeholder='Your Message'></textarea>
                    <button className='flex flex-row fonts gap-2 mt-4 bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 px-4 py-2 rounded-lg w-full justify-center'>Send Message
                        <IoIosSend className='text-2xl flex flex-col justify-center fonts space-x-3' /></button>
                </form>
            </div>
        </div>

    )
}

export default Contact
