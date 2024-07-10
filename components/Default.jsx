'use client'

import React from 'react'
import { Input } from './ui/input'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
function Default() {
  
  const[userinp,setUserinp]=useState('');
  const handle = (u) => {
    u.length === 0 ? alert("Enter the dish name") : window.location.href = `/${u}`;
  }

  return (
    <div className='flex justify-center items-center mt-20 mx-4 '>
      <div className='flex w-full max-w-lg items-center space-x-4'>
        <Input placeholder='Enter Dish Here..' type='Text' className='text-md border border-black' onChange={(e)=>setUserinp(e.target.value)} value={userinp} />
        <Link href={`/${userinp}`} >
          <Button  className='bg-black text-white px-6 py-2 rounded-md text-md' onClick={() => handle(userinp)} >Search</Button>
        </Link>
      </div>
    </div>
  )
}


export default Default