import Link from 'next/link'
import React from 'react'
import Button from '@/components/ui/Button'
import mazadyLogo from '/public/mazadyLogo.png'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { MagnifyingGlassIcon, BellIcon, GlobeIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'


const Navbar = () => {
  return (
    <nav data-testid='navbar' className='bg-white flex w-full px-10 py-3 items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <div className='block md:hidden'>
          <HamburgerMenuIcon width={20} height={20} />
        </div>
        <Image src={mazadyLogo} alt='logo' />
        <div className='hidden lg:flex lg: gap-2'>
          <Link href='/' className='text-primary font-bold text-lg'> Home </Link>
          <Link href='/blog' className='text-base font-extralight text-lg'> Blog </Link>
          <Link href='/gifts' className='text-base font-extralight text-lg'> Gifts </Link>
        </div>
      </div>
      <div className='flex gap-2 items-center h-5 md:visible'>
        <MagnifyingGlassIcon width={24} height={24}/>
        <Separator orientation='vertical' className='bg-base' />
        <BellIcon width={24} height={24}/>
        <Separator orientation='vertical' className='bg-base' />
        <Avatar>
          <AvatarImage src="/profileExampl.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button className='hidden lg:flex'>
          + Add New Product
        </Button>
        <GlobeIcon width={24} height={24} />
        <p>EN</p>
      </div>
    </nav>
  )
}

export default Navbar