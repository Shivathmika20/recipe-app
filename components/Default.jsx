'use client'

import React from 'react'
import { Input } from './ui/input'
import { useState } from 'react'
import Link from 'next/link'

function Default() {
  
  const[userinp,setUserinp]=useState('');
  // console.log(userinp);
  // const url='https://www.themealdb.com/api/json/v1/1/search.php?s=';


  return (
    <div className='flex justify-center items-center mt-20 mx-4 '>
      <div className='flex w-full max-w-lg items-center space-x-4'>
        <Input placeholder='Enter Dish Here..' type='Text' className='text-md' onChange={(e)=>setUserinp(e.target.value)} value={userinp} />
        <Link href={`/${userinp}`} className='bg-black text-white px-6 py-2 rounded-md text-md' >Search</Link>
      </div>
    </div>
  )
}


export default Default