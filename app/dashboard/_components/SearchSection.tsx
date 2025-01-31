import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='p-10 bg-slate-900 flex flex-col justify-center items-center text-white pt-36'>
      <h2 className='text-5xl font-bold text-purple-200'>
        Find Your Template
      </h2>
      <p className='text-xl pt-2 text-purple-300'>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-3 w-[50%]">
          <Search className='text-black' />
          <input type="text" placeholder='Search'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
