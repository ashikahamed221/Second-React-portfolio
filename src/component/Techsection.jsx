import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { animate, motion } from 'framer-motion'
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CgVercel } from "react-icons/cg";


const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Techsection = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='text-center fonts text-4xl my-20'>Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiReact className='text-7xl text-pink-700' />
          <p className="text-center text-sm font-bold mt-2 fonts">React</p>
        </motion.div>

        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-7xl text-cyan-300 ' />
          <p className="text-center text-sm font-bold mt-2 fonts">Tailwind</p>
        </motion.div>

        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-500 ' />
          <p className="text-center text-sm font-bold mt-2 fonts">Mongodb</p>
        </motion.div>

        <motion.div
          variants={iconvariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-yellow-300 ' />
          <p className="text-center text-sm font-bold mt-2 fonts">Express JS</p>
        </motion.div>

        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500 ' />
          <p className="text-center text-sm font-bold mt-2 fonts">Node JS</p>
        </motion.div>

        <motion.div
          variants={iconvariants(7)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <IoLogoJavascript className='text-7xl text-yellow-300' />
          <p className="text-center text-sm font-bold mt-2 fonts">Javascript</p>
        </motion.div>
      </motion.div>

      {/* tools */}

      <div className='mt-30'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='text-center pb-10 fonts text-4xl'>Tools</motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div
            variants={iconvariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <VscVscode className='text-7xl text-blue-600' />
            <p className="text-center text-sm font-bold mt-2 fonts">vs code</p>
          </motion.div>


          <motion.div
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-500' />
            <p className="text-center text-sm mt-2 font-bold fonts">Git</p>
          </motion.div>

          <motion.div
            variants={iconvariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostman className='text-7xl text-orange-400' />
            <p className="text-center text-sm mt-2 font-bold fonts">Postman</p>
          </motion.div>

          <motion.div
            variants={iconvariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <CgVercel className='text-7xl text-cyan-400' />
            <p className="text-center text-sm mt-2 font-bold fonts">Vercel</p>
          </motion.div>

          <motion.div
            variants={iconvariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCanva className='text-7xl text-cyan-400' />
            <p className="text-center text-sm mt-2 font-bold fonts">Canva</p>
          </motion.div>

          <motion.div
            variants={iconvariants(7)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className='text-7xl text-white' />
            <p className="text-center text-sm mt-2 fonts">Github</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Techsection
