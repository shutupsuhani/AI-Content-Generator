import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 bg-white  shadow-sm border-b-2 flex justify-between items-center'>
       
       <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg shadow-sm'>

        <Search/>
        <input type='text' placeholder='Search' className='outline-none'/>
       </div>

       <div className=''>
        <h2 className='bg-primary px-2 text-sm text-white rounded-full'>🔥Join Membership at just $9.9</h2>
       </div>

    </div>
  )
}

export default Header