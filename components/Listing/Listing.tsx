import React from 'react'
import ListingHeader from '@/components/ListingHeader/ListingHeader'
import Count from '@/components/ui/Count'
import Product from '@/components/Product/Product'
const Listing = () => {
  return (
    <div className='bg-white p-5 h-full rounded-xl'>
      <ListingHeader />
      <h3 className="text-2xl font-bold">
        Products 
        <Count value={12} />
      </h3>
      <div className='py-4'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        {/* <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  )
}

export default Listing