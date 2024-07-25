import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-2.5 shadow-sm border-b-2 flex justify-between'>
      <div className="flex gap-2 items-center border rounded-md max-w-lg">
        <Search/>
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      <div className=" text-xs text-white">
        <Button>Join Membership</Button>
      </div>
    </div>
  )
}

export default Header
