import React from 'react'
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div>
      <div>
        <p className='text-primary font-bold text-md'>Review<span className='text-secondary'>Article</span></p>
      </div>
      <div className='w-[573px] h-[48px] bg-grey flex flex-row '>
        <input type="text" className='w-[573px] px-2 bg-grey h-[48px]'
         placeholder='Find the book you are looking for' />
         <div className='px-2 pt-2'>
         <CiSearch className='text-md'/>
         </div>
         
      </div>
    </div>
  )
}

export default Navbar