import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-2.5 shadow-sm border-b-2 flex  justify-between '>
      <div className="flex gap-2 items-center border rounded-md max-w-lg">
        <Search/>
        <input type="text" placeholder='Search...' className='outline-none' />
      </div>
      <div className=" text-xs text-white flex gap-5 items-center">
        <Button>Join Membership</Button>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
