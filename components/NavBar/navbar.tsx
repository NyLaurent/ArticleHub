import React from 'react'
import { IoSearch } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import Link from 'next/link'
import Navigation from './nav';

import { FaUserTie } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <div className='flex flex-row justify-evenly pt-3'>
      <div>
        <p className='text-primary font-bold text-md'>Review<span className='text-secondary'>Article</span></p>
      </div>
      <div className="w-[573px] h-[48px] bg-grey flex flex-row items-center rounded-lg ">
      <input 
        type="text" 
        className="w-full bg-transparent px-2 h-full placeholder-gray-500 focus:outline-none"
        placeholder="Find the book you are looking for" 
      />
      <div className="px-2">
        <IoSearch className="text-md text-primary cursor-pointer" />
      </div>
    </div>
      <div className='flex flex-row gap-9'>
      <CiSaveDown2 className='text-md' />
      <GoMoon className='text-md' />
      <p className=''>EN</p>
      <FaUserTie className='text-secondary text-md'/>


      </div>
    </div>

   <div>
    <Navigation/>
   </div>
    </div>
    

    
  )
}

export default Navbar