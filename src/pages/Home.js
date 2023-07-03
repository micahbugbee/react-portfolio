import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Typescript from '../assets/typescript.png';
import Mongo from '../assets/mongo.png';
import MySQL from '../assets/mysql.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home() {

  return (
    <div name='home' className='w-full h-screen bg-[#2f3035]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#9ea7c4]'>
          MICAH BUGBEE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#9ea7c4]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I specialize in building exceptional real-world digital applications. Currently, I am focused on building responsive full-stack web applications with React and Typescript.
        </p>

        <div>
          <Link to='skills' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            View Skills
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>

        </div>
      <div name='skills' className='w-full h-screen bg-[#2f3035] text-[#9ea7c4] font-bold'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '> Skills</p>
          </div>
        

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MySQL} alt="HTML icon" />
                  <p className='my-4 text-[#9ea7c4]'>MYSQL</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home