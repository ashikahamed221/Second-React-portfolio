import React, { useState } from 'react'
import { CONTACT } from '../constans'
import { motion } from "framer-motion"
import { IoIosSend } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../constans/lib'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Contact = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")

    const handlesubmit = async (e) => {

        e.preventDefault()

        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Please Enter Your Details")
        }
        else {
            try {
                await addDoc(collection(db, "form"), {

                    name: name,
                    email: email,
                    message: message,
                    createAT: serverTimestamp()
                })
                setname("")
                setemail("")
                setmessage("")
                
                toast.success("Form Submitted Successfully")
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Failed to submit form. Please try again.")
            }
        }
    }
    return (
        <div className='border-b border-neutral-900 pb-20 '>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='text-center my-10 text-4xl'>Get in Touch</motion.h2>
            <div className='text-center tracking-tighter'>

            </div>
            <div className='mt-25 flex flex-col items-center'>
                <form onSubmit={handlesubmit} className='p-4 md:p-6 rounded-2xl '>

                    <label htmlFor="" className='flex flex-row'>Name</label>
                    <input type="text"
                        value={name} onChange={(e) => setname(e.target.value)}
                        required className='bg-neutral-300 py-2 px-6 fonts font-bold md:w-100 rounded text-black mt-3
                    hover:border-blue-600' placeholder='Enter Your Name' />

                    <label htmlFor="" className='flex flex-row mt-4'>Email </label>
                    <input type="email"
                        value={email} onChange={(e) => setemail(e.target.value)}
                        required className='bg-neutral-300 fonts py-2 px-6 md:w-100 rounded text-black mt-3' placeholder='Enter Your Email' />

                    <label htmlFor="" className='flex flex-row mt-4'>Message </label>

                    <textarea name="message"
                        value={message} onChange={(e) => setmessage(e.target.value)}
                        required className='w-full mt-4 fonts md:w-100 bg-neutral-300 p-2 text-black rounded h-50' placeholder='Your Message'></textarea>
                    <Toaster />
                    <button type='submit' className='flex flex-row fonts gap-2 mt-4 bg-gradient-to-r from-rose-500 via-indigo-700 to-red-500 px-4 py-2 rounded-lg w-full justify-center'>Send Message
                        <IoIosSend className='text-2xl flex flex-col justify-center fonts space-x-3' /></button>
                </form>

            </div>
        </div>

    )
}

export default Contact
