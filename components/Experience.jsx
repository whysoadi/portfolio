import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {HiExternalLink} from 'react-icons/hi'

const Experience = () => {
  return (
    <div id='experience' className='w-full h-full p-2 py-24 pb-20 items-center'>
        <div className='max-w-[1240px] m-auto '>
        <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Experience</p>
        <h2 className='py-4'>Where I've Worked</h2>
        <div className='w-full px-6 py-8 shadow-xl rounded-xl hover:scale-105  duration-200'>
           <div className='grid md:grid-cols-3 gap-4'>
      <div className='md:col-span-2'>
     <div className='text-xl font-bold'>React Web Developer Intern</div>
     <p className='text-[#5651e5] flex items-center py-1'>Aeidth Technologies <Link href="https://www.aeidth.com/home" target='_blank' className='px-1'><HiExternalLink /></Link></p>
    <ul className='px-6 py-1'>
        <li className='list-disc py-2'> Designed an interactive and responsive UI using <span className='font-bold'>Figma</span>.</li>
        <li className='list-disc'>  Built the web application using <span className='font-bold'>React.js</span>, for responsive styling <span className='font-bold'>Tailwind CSS</span> and integrating the Fetch API
to retrieve and display dynamic data from the server.</li>
    </ul>
      </div>
      <div className='flex justify-center items-center m-auto'>
      <Image src='/assets/html.png' width='64' height='64' alt='/'/>
      <Image src='/assets/tailwind.png' width='64' height='64' alt='/'/>
      <Image src='/assets/figma.png' width='64' height='64' alt='/'/>
      <Image src='/assets/react.png' width='64' height='64' alt='/'/>
      </div>
           </div>
        </div>
        <div className='p-6 mt-4 shadow-xl rounded-xl hover:scale-105  duration-200'>
        <div className='grid md:grid-cols-3 gap-4'>
      <div className='md:col-span-2'>
     <div className='text-xl font-bold'>Graphic Design Intern</div>
     <p className='text-[#5651e5] flex items-center py-1'>Patralok Media Network <Link href="https://www.patralok.com/" target='_blank' className='px-1'><HiExternalLink /></Link></p>
    <ul className='px-6 py-1'>
        <li className='list-disc py-2'>Designed posters & illustrations for articles based on the descriptive information using <span className='font-bold'>Photoshop</span> and <span className='font-bold'>Figma</span>.</li>
       
    </ul>
      </div>
     
      <div className='flex justify-center items-center m-auto'>
      <Image className='mx-2 hover:scale-150 rounded-lg duration-200' src='/assets/FTX.jpg' width='150' height='150' alt='/'/>
      <Image className='mx-2 hover:scale-150 rounded-lg duration-200' src='/assets/neeraj.jpg' width='150' height='150' alt='/'/>

      
      </div>
     
           </div>
        </div>
        <div className='w-full p-6 mt-2 shadow-xl rounded-xl hover:scale-105  duration-200'>
           <div className='grid md:grid-cols-3 gap-4'>
      <div className='md:col-span-2'>
     <div className='text-xl font-bold'>Graphic Design Intern</div>
     <p className='text-[#5651e5] flex items-center py-1'>Techtitude Tribe Services Pvt. Ltd.<Link href="https://techtitudetribe.co.in/" target='_blank' className='px-1'><HiExternalLink /></Link></p>
    <ul className='px-6 py-1'>
        <li className='list-disc py-2'>Designed posters, banners & interactive <span className='font-bold'>UI</span> that stands out and meets User’s requirements.</li>
        <li className='list-disc'><span className='font-bold'>Graphics</span> for social media posts, ads and many festive occasions.</li>
    </ul>
      </div>
      <div className='flex justify-center items-center m-auto'>
      <Image className='mx-2 hover:scale-150 rounded-lg duration-200' src='/assets/dussehra.jpg' width='150' height='150' alt='/'/>
      <Image className='mx-2 hover:scale-150 rounded-lg duration-200' src='/assets/molestation.jpg' width='150' height='150' alt='/'/>

      
      </div>
           </div>
        </div>
        </div>
       
    </div>
  )
}

export default Experience
