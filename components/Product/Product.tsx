import React from 'react'
import Badge from '@/components/ui/Badge'
import Image from 'next/image'
import productImage from '@/public/productImage.png'
import Icon from '../Icon'
const Product = () => {
  return (
    <div className='flex max-h-[150px] pl-1 my-4'>
      <div className='flex gap-1 md:gap-5  md:w-full lg:w-full'>
        <Image className='max-w-20 md:max-w-32 lg:basis-1/4 md:basis-1/4 object-cover rounded-3xl' src={productImage} alt='thumbnail' />
        <div className='flex flex-grow justify-between'>
          <div className='flex flex-col justify-around'>
            <p className='lg:text-lg'>Six-piece clothing set (blouse - pants - hat and ...</p>
            <p className='text-sm lg:text-lg text-base'> Starting Price <span className='md:text-xl font-bold text-black'>1000 EGP</span></p>
            <div className='flex md:gap-4 items-center'>
              <p className='text-base text-sm lg:text-lg'>
                Lot Starts In
              </p>
              <Badge primaryText='2 Days' className='rounded-2xl' primaryTextStyles='text-secondary' />
              <Badge primaryText='10 Hours' className='rounded-2xl' primaryTextStyles='text-secondary' />
              <Badge primaryText='50 Minutes' className='rounded-2xl' primaryTextStyles='text-secondary' />
            </div>
          </div>
            <Icon className='mt-4' name='heart' width={22} />
        </div>
      </div>
    </div>
  )
}

export default Product