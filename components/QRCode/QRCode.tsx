import React from 'react'
import Badge from '@/components/ui/Badge'
import Image from 'next/image'
import MazadyLogo from '/public/mazadyLogo.png'
import QRCodePNG from '/public/qrcode.png'
import Icon from '../Icon'
const QRCode = () => {
  return (
    <div className=" bg-white rounded-xl flex flex-col p-4 px-6 pb-6 max-h-[440px] min-w-[200px]">
      <div className='mb-5 flex justify-between'>
        <h1 className="text-2xl">QR Code</h1>
        <div className='flex gap-5'>
          <Icon name='eye' width={24} />
          <Icon name='share' width={24} />
          <Icon name='document' width={24} />
        </div>
      </div>
      <Badge iconName='document' primaryText='Download the QR code or share it with your friends.' primaryTextStyles='font-normal' className='mb-5 h-10' />
      <div className='bg-gradient-to-r from-primary to-secondary  rounded-xl flex-1 p-6'>
        <div className="bg-white h-full rounded-lg flex flex-col items-center p-2">
          <Image src={MazadyLogo} alt='mazady-logo'/>
          <h4 className="text-xl mt-2 mb-1 font-semibold">Hala Ahmed</h4>
          <Image src={QRCodePNG} alt='qr-code' width={110}/>
          <p className='font-light'>Follow Us On Mazaady</p>
        </div>
      </div>
    </div>
  )
}

export default QRCode