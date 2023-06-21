import React from 'react'
import{HiArrowRight} from 'react-icons/hi'
export const Card = ({title,des,icon}) => {
  return (
     <div className='w-full h-80 px-12 py-10 rounded-lg 
     shadow-shadowOne items-centre bg-gradient-to-r
      from-bodyColors to-[#2b2a2a] group hover:bg-gradient-to-b 
      hover:from-black hover:to-[#le2024] transition-colors duration-100 bg-gray-800
      flex group'>
     <div className=' overflow-y-hidden'>
        <div className='flex h-full flex-col gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-500 '>
           <div>
            <span className='text-3xl text-red-500'>{icon}</span>
           </div>
            <div className='flex flex-col gap-4'>
            <h2 className=' text-xl md:text-2xl font-titleFont font-bold text-gray-300 '>{title}</h2>
             <p className='base'>{des} </p>
             <span className='text-1xl text-designColor'><HiArrowRight/></span>
           </div> 
        
         </div>
     </div>
    </div>
  )
}
