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
          des="From this web application user can search nearest blood bank using pin number,That's bank actually registered in our portal.User can visit different blood bank, shaw the stock and order.(For source code click on github icon)"
          img={blood}
          link="https://github.com/Pinaki-Sasmal988/Final_year"
          />
        <ProjectCard 
            tittle="E-Commerce site"
            des="This web application is a normal E-Commerce site.Where user can visit different product and after login they can order the product.Technology are used to develope this web application Laravel(php) framework (For source code click on github icon)"
            img={ecommerce}
            link="https://github.com/Pinaki-Sasmal988/E_Commerce"
          />
          <ProjectCard 
            tittle="Article News System"
            des="This application show latest news as a article help of third party application.When latest news are update,it's automatically fetching in our application.If we want then we can visit the details of every articles.This application developed by React js. "
            img={news}
            link="https://github.com/Pinaki-Sasmal988/News-System"
          /> 

        </div>
    </section>
  )
}
