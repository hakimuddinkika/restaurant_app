import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
  return (
    <>
        <div className='bg-stone-100 p-4 rounded-lg text-center group hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'>
            <div className='flex justify-center w-full'>
                <Image 
                src="/burger.png"
                alt="Burger"
                // objectFit='contain'
                
                width={'150'}
                height={'150'}
                />
            </div>
            <h4 className='my-3 font-semibold text-xl'>Dynamite Burger</h4>
            <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse aliquam quidem nisi vel harum in maiores magnam nam veniam.
            </p>
            <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>Add to cart KD12</button>
        </div>
    </>
  )
}

export default MenuItem