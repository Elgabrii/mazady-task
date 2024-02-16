import React, { FC } from 'react'
import Image from 'next/image'
import defaultProfile from '/public/profileExampl.jpeg'
import Icon from '../Icon'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
const Profile : FC<{}> = () => {
  return (
    <div className="bg-white rounded-xl flex-col max-h-[391px] mb-5 min-w-[200px] p-6">
      <Image src={defaultProfile} className='object-cover h-[100px] rounded-lg' alt='profile-pic' width={100}/>
      <h4 className='text-2xl font-bold my-2'>Hala Ahmed</h4>
      <p className='text-sm whitespace-normal my-2'>
        I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
      </p>
      <div className='grid grid-cols-3 gap-5 my-6'>
        <Badge iconName='user-tick' primaryText='5' secondaryText='Following' />
        <Badge iconName='users' primaryText='20' secondaryText='Followers' />
        <Badge iconName='user-tick' primaryText='4.2' secondaryText='Rate' count={15} />
      </div>
      <Button className='my-5 w-full justify-center'>
        Follow
      </Button>
    </div>
  )
}

export default Profile