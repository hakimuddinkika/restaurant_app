import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section className=''>
        <div className='absolute left-0 right-0 w-full justify-start'>
            <div className='h-48 w-48 absolute left-0 -z-10 -top-[70px]'>
                <Image 
                    src={"/lettuce.png"}
                    layout='fill'
                    objectFit='contain'
                    alt="Salad"
                />
            </div>
            <div className='h-48 w-48 absolute right-0  -z-10 -top-[100px]'>
                <Image 
                    src={"/lettuce.png"}
                    layout='fill'
                    objectFit='contain'
                    alt="Salad"
                />
            </div>
        </div>
        <div className='text-center'>
            <SectionHeaders subHeader={'Checkout'} mainHeader={'Menu'} />
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
  )
}

export default HomeMenu