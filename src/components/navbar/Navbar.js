import React from 'react';
import{Link} from "react-scroll";
import {logo} from"../../assets/index";
import {navLinksdata} from "../constent/index";
export const Navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColors mx-auto flex justify-between items-centre font-titleFont border-b-[1px] border-b-gray-600'>
        <div><img src={logo} alt='logo'></img></div>
        <div>
            <ul className='flex items-center gap-10 text-lightText mt-8'>
                
               {
                navLinksdata.map(({_id,title,link})=>(
                 <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' 
                 key={_id}>
                   <Link
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                   >
                   {title}
                   </Link> 
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
  )
}
export default Navbar;
