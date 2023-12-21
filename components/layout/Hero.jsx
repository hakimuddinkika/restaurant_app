import Image from 'next/image'
import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='py-12'>
            <h1 className='text-4xl font-semibold'>
                Everything<br/> 
                is better <br />
                with a <span className='text-primary'>Burger</span></h1>
            <p className='my-6 text-stone-400 text-sm'>
                Burgers are the best lunch we can have. It is best when joined with the Beef Patty
            </p>
            <div className='flex gap-4 text-sm'>
                <button className='bg-primary flex gap-2 items-center text-white px-8 py-2 rounded-full uppercase'>Order Now <ArrowRightCircleIcon height='20' width='20' /></button>
                <button className='flex gap-2 py-2 text-stone-600 font-semibold items-center'>
                    Learn More
                    <ArrowRightCircleIcon height='20' width='20' />
                </button>
            </div>
        </div>
        <div className='relative'>
            <Image src={'/burger.png'} layout='fill' objectFit='contain' alt={'Burger'} />
        </div>
    </section>
  )
}

export default Hero