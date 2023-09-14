import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

import {HiOutlineChevronDoubleUp} from "react-icons/hi"

const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="w-full mx-auto pb-8 pt-24 px-2 max-w-[1240px]">
        <p className="w-full tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 py-1 ease-in duration-300"
                  src="/assets/projects/contact.jpg"
                  height="450"
                  width="420"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Aditya Yadav</h2>
                <p>Web Developer || UI Designer</p>
                <p className="py-4">I'm available for freelance and full-time positions. Let's connect and talk!</p>
              </div>
          
            <div className="pt-20">
              <p className="uppercase text-[#5651e5]"> connect with me</p>
              <div className=" justify-between flex items-center py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
              </div>
            </div>
          </div>
                   <div className="shadow-xl shadow-gray-400 h-auto w-full rounded-xl lg:p-4 col-span-3">
                <div className="py-4">

                  <form >
                  <div className="grid md:grid-cols-2 gap-4 py-2 w-full ">
                 <div className="flex flex-col">
                  <label className="py-2 uppercase text-sm mx-1">Name</label>
                   <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text" />
                 </div>

                 <div className="flex flex-col">
                  <label className="py-2 uppercase text-sm mx-1">Phone Number</label>
                   <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text" />
                 </div>
                 </div>
                      
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text" />
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-lg flex p-3 mx-1 border-gray-300" type="text" />
                      </div>
                      <div className="flex flex-col py-2">
                        <label className="text-sm uppercase py-2">message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='8' ></textarea>
                      </div>
                          <button className="uppercase w-full p-4 mt-4 text-gray-100">send message</button>
                 </form>
                
              </div>
              </div>
        </div>
        
        <div className="flex justify-center py-12">
          <Link href='/#home'  className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
