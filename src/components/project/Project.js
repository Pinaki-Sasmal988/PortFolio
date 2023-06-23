import React from 'react'
import { Tittle } from '../layout/Tittle'
import { ProjectCard } from './ProjectCard'
import {blood, ecommerce, news} from '../../assets/index'
export const Project = () => {
  return (
    <section id="project" 
    className='w-full h-auto py-20 items-centre border-b-[1px] border-b-gray-600'>
        <div className='flex justify-center items-center text-center'>
        <Tittle Tittle="" des="My Project"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-7 xl:gap-14'>
          <ProjectCard 
          
          tittle="Blood Find Application"
          des="Learn from me totally free,Thats would be very help in your futures"
          img={blood}
          link="https://github.com/Pinaki-Sasmal988/Final_year"
          />
        <ProjectCard 
            tittle="E-Commerce site"
            des="Learn from me totally free, Thats would be very help in your futures"
            img={ecommerce}
            link="https://github.com/Pinaki-Sasmal988/E_Commerce"
          />
          <ProjectCard 
            tittle="Article News System"
            des="Learn from me totally free"
            img={news}
            link="https://github.com/Pinaki-Sasmal988/News-System"
          /> 

        </div>
    </section>
  )
}
