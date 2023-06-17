import React from 'react'

export const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className='w-full h-1/3 group flex'>
        <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
            <span className='absolute w-3 h-5 rounded-full -top-2 -left-2 flex justify-center items-center bg-black bg-opacity-60'>
            <span className='w-3 h-3 rounded-full bg-bodyColors inline-flex  group-hover:bg-designColor duration-300'></span>
            </span>
        </div>

        <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 justify-center flex flex-col gap-10 shadow-shawOne'>
         <div className='flex justify-between items-center '>
                <div>
               <h3 className='text-1xl font-semibold group-hover:text-white duration-300'>{title}</h3>
               <p className='mt-2 text-sm text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
               </div>
               <div>
                <p className='w-20 h-10  text-designColor bg-black bg-opacity-25rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium '>{result}</p>
               </div>
         </div>
         <p>{des}</p>
        </div>
        </div>
  )
}
