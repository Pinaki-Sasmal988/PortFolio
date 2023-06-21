import React from 'react'
import { Tittle } from '../layout/Tittle'
import { ProjectCard } from './ProjectCard'
import {projectOne} from '../../assets/index'
export const Project = () => {
  return (
    <section id="project" 
    className='w-full h-auto py-20 items-centre border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Tittle Tittle="Visit My Project Section" des="My Project"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-7 xl:gap-14'>
          <ProjectCard 
          
          tittle="Social Media Clone"
          des="Learn from me totally free,Thats would be very help in your futures"
          img={projectOne}
          />
          <ProjectCard 
            tittle="Blood Find Application"
            des="Learn from me totally free, Thats would be very help in your futures"
            img={projectOne}
          />
          <ProjectCard 
            tittle="Social Media Clone"
            des="Learn from me totally free"
            img={projectOne}
          />

        </div>
    </section>
  )
}
