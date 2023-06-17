import React from 'react'

export const Tittle = ({Tittle,des}) => {
  return (
    <div className='flex flex-col gap-5 font-titleFont mb-14'>
       <h3 className='text-1xl uppercase font-light text-designColor '>{Tittle}</h3>
       <h1 className='text-5xl text-gray-300 font-bold capitalize'>{des}</h1>
       </div>
  )
}
