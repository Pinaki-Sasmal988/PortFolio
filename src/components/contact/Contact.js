import React from 'react'
import { Tittle } from '../layout/Tittle'
import { contactImg } from '../../assets'
export const Contact = () => {
  return (
    <section id="contact" className='w-full py-20 border-b-[1px] border-b-black'>
<div className='flex justify-center items-center text-center'>
<Tittle Tittle="CONTACT" des="Contact With Me"/>
</div>
<div className='w-full'>
    <div className='w-full h-auto flex justify-between'>
        <div className='w-[35%] h-full bg-gradient-to-r from-[#485e5e] to-[#485e5e] p-8 r'>
          <img 
          className='w-full h-50 object-cover rounded-lg'
          src={contactImg} alt='contactImg'/>
          <div>
            <h3 className='text-1xl font-bold text-white'>Pinaki Sasmal</h3>
            <p className='text-sm font-normal text-gray-300'>MERN Stack Developer</p>
            <p className='text-base text-gray-400 tracking-wide'>kjwefkjhwefkjhwefkhf kbweffihf</p>
            <p>Phone: 6291170712</p>
            <p>Email: pinakisasmal988@gmail.com</p>
          </div>
        </div>
        <div className='w-[60%] h-10 flex flex-col justify-between bg-blue-500'>

        </div>
    </div>
</div>
     </section>
  )
}
