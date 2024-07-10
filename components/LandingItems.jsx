import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
function LandingItems() {
  return (
    <div className='mt-20  text-lg'>
        <h2 className='text-3xl text-center'>Popular Dishes</h2>
        <div className='grid grid-cols-2 gap-4 mx-4 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 md:gap-16 my-16 '>
        <Link href='/pizza' >
            <Button  className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Pizza</Button>
        </Link>
        <Link href='/Burger'>
            <Button   className=' px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Burger</Button>
        </Link>
        <Link href='/cake'>
            <Button   className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Pancake</Button>
        </Link>
        <Link href='/shawarma'>
            <Button   className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Shawarma</Button>
        </Link>
        <Link href='/sugar pie'>
            <Button  className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Sugar Pie</Button>
        </Link>
        <Link href='/dal fry'>
            <Button   className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Dal fry</Button>
        </Link>
        <Link href='/biryani'>
            <Button   className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Biryani</Button>
        </Link>
        <Link href='/Big mac'>
            <Button   className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Big Mac</Button>
        </Link>
        <Link href='/green curry'>
            <Button  className='px-10 py-7 bg-black text-white rounded-md text-lg w-full'>Green Curry</Button>
        </Link>
        
        </div>
    </div>
  )
}

export default LandingItems