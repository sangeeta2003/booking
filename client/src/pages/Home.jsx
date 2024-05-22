import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <header className='p-4 flex justify-between'>
   <a href=''className='logo flex flex-row gap-2 items-center '>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 text-primary">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
<span className='font-bold text-xl'>airbanc</span>
</a>
<div className='flex border gap-2 border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-500'>
<div>Anywhere</div>
<div className='border-l border-gray-300'></div>
<div>Any weeks</div>
<div className='border-l border-gray-300'></div>
<div>Any Guests</div>
<button className='bg-primary text-white p-1 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</button>
</div>
<Link to='/login' className='flex border gap-2 items-center border-gray-500 rounded-full px-4 py-2'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
<div className="bg-gray-300 text-white rounded-full border border-gray-500 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
      </div>

</Link>
    </header>
  </div>
  )
}

export default Home