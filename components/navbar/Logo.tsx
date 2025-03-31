import React from 'react'
import { Button } from '../ui/button'
import { LuArmchair } from 'react-icons/lu';
import Link from 'next/link'
import { VscCode } from 'react-icons/vsc';
function Logo() {
  return (
    <div>
      <Button size='icon' asChild>
      <Link href='/'>
        <VscCode className='w-6 h-6' />
      </Link>
    </Button>
    </div>
  )
}

export default Logo
