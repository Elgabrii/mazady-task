import React, { FC } from 'react'
import Button from '@/components/ui/Button'
import Category from '@/components/ui/Category'

const ListingHeader: FC = () => {
  return (
    <div className='flex justify-between items-center mb-5'>
      <div className='flex gap-2'>
        <Category selected name='Products'/>
        <Category name='Articles'/>
        <Category name='Reviews'/>
      </div>
      <Button className='h-10'>
        + Add Review
      </Button>
    </div>
  )
}

export default ListingHeader