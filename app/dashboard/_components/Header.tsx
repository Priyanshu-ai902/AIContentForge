import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <div className='p-2.5 shadow-sm border-b-2 flex justify-between'>
      <div className='ml-auto'>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
