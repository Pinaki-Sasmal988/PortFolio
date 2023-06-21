import React from 'react'
import { contactImg } from '../../assets'
import{FaFacebookF,FaLaravel,FaLinkedinIn,FaReact} from 'react-icons/fa';
export const ContactLeft = () => {
  return (
    <div className=' w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#232424] to-[#1a1b1b] p-4 lgl:p-8 rounded-lg shadow-shawOne flex flex-col gap-4'>
          <img 
          className='w-full h-50 object-cover rounded-lg mb-2'
          src={contactImg} alt='contactImg'/>
          <div className='flex flex-col gap-3'>
            <h3 className='text-1xl font-bold text-white'>Pinaki Sasmal</h3>
            <p className='text-sm font-normal text-gray-300'>MERN Stack Developer</p>
            <p className='text-base text-lightText tracking-wide'>kjwefkjhwefkjhwefkhf kbweffihf</p>
            <p className='text-base text-gray-300 flex items-center gap-2'>
              Phone:<span className='text-lightText'> 6291170712</span></p>
            <p>Email:{" "} <span className='text-lightText'>pinakisasmal988@gmail.com</span></p>
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont gap-2'>Find Me</h2>
             <div className='flex gap-4'>
             <span className='bannerIcon'><FaFacebookF/></span>
             <span className='bannerIcon'><FaLinkedinIn/></span>
             <span className='bannerIcon'><FaFacebookF/></span>
             </div>
          </div>
        </div>
  )
}
