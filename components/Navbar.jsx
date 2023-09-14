"use client";
import React, {use, useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow]= useState(false);


  useEffect(() => {
    const handleShadow=()=>{
      if(window.scrollY>=90){
        setShadow(true);
         
      }
        else {
          setShadow(false);
      }
    };
      window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]' : 'fixed w-full  h-20 z-[100] '}>
      <div className='flex justify-between items-center w-full px-2 py-4 2xl:px-16'>
        <Link href='/#home'>
        <Image src="/assets/ay1.png" alt='/' width="90" height='50' className='cursor-pointer' />
        </Link>
        <div>
      <ul className='hidden md:flex'>
        <Link href="/#home">
            <li className='ml-10 text:sm uppercase hover:border-b font-bold hover:scale-105 ease-in duration-150 hover:text-[#5651e5]'>Home</li>
        </Link>
        <Link href="/#about">
            <li className='ml-10 text:sm uppercase font-bold hover:border-b hover:scale-105 ease-in duration-150 hover:text-[#5651e5] '>About</li>
        </Link>
        <Link href="/#skills">
            <li className='ml-10 text:sm uppercase font-bold hover:border-b hover:scale-105 ease-in duration-150 hover:text-[#5651e5]'>Skills</li>
        </Link>
        <Link href="/#projects">
            <li className='ml-10 text:sm uppercase font-bold hover:border-b hover:scale-105 ease-in duration-150 hover:text-[#5651e5]'>Projects</li>
        </Link>
        <Link href="/#contact">
            <li className='ml-10 text:sm uppercase font-bold hover:border-b hover:scale-105 ease-in duration-150 hover:text-[#5651e5]'>Contact</li>
        </Link>
      </ul>
      <div  onClick={handleNav} className='md:hidden'>
        <AiOutlineMenu size={25}/>
      </div>
      </div>
      </div>
      <div className={nav? 'fixed left-0 top-0 w-full h-screen bg-black/70':" "}>
         <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':
        'fixed left-[-100%] top-0  p-10 ease-in duration-500' }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/assets/ay1.png" width='87' height='35' alt='/' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose  />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
             <p className='w-[85%] md:w-[90%] py-4'> Lets build something together!</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home'>
              <li className='py-4 text-sm  hover: ease-in duration-150 hover:text-[#5651e5]'>Home</li>
              </Link>
              <Link href='/#about'>
              <li className='py-4 text-sm  hover: ease-in duration-150 hover:text-[#5651e5]'>About</li>
              </Link>
              <Link href='/#skills'>
              <li className='py-4 text-sm  hover:ease-in duration-150 hover:text-[#5651e5]'>Skills</li>
              </Link>
              <Link href='/#projects'>
              <li className='py-4 text-sm  hover: ease-in duration-150 hover:text-[#5651e5]'>Projects</li>
              </Link>
              <Link href='/#contact'>
              <li className='py-4 text-sm  hover: ease-in duration-150 hover:text-[#5651e5]'>Contact</li>
              </Link>
            </ul>
             <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
             </div>
             <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
              <Link href='https://www.linkedin.com/in/aditya-yadav-348052289/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn/>
              </Link>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill/>
              </div>
             </div>
          </div>
         </div>
     </div>
   </div>
  )
}

export default Navbar
