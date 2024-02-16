import Link from 'next/link'
import React from 'react'
import VerticalSeparator from '@/components/ui/VerticalSeparator'
import Button from '@/components/ui/Button'
import mazadyLogo from '/public/mazadyLogo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='bg-white flex w-full px-10 py-3 items-center md:justify-between lg:justify-between'>
      <div className='flex gap-2 items-center'>
        <Image src={mazadyLogo} alt='logo' />
        <Link href='/' className='text-primary font-bold text-lg'> Home </Link>
        <Link href='/blog' className='text-base font-extralight text-lg'> Blog </Link>
        <Link href='/gifts' className='text-base font-extralight text-lg'> Gifts </Link>
      </div>
      <div className='flex gap-2 items-center'>
        <p>search</p>
        <VerticalSeparator />
        <p>bell</p>
        <VerticalSeparator />
        <Button>
          + Add New Product
        </Button>
        <p>Globe</p>
        <p>EN</p>
      </div>
    </nav>
  )
}

export default Navbar