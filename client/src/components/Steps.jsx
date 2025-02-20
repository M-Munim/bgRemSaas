import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-l from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>

            <div className='flex items-start flex-wrap gap-4 my-16 xl:mt-24 justify-center bg-red-200'>
                <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-300'>
                    <img className='max-w-9' src={assets.upload_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Effortless Upload</p>
                        <p className='text-sm text-neutral-500 mt-1'>Quickly upload your images to get<br /> started  in just a click!</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-300 '>
                    <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>One-Click  Removal</p>
                        <p className='text-sm text-neutral-500 mt-1'>Instantly remove backgrounds for a clean, <br />polished look.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-300'>
                    <img className='max-w-9' src={assets.download_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>High-Quality Download</p>
                        <p className='text-sm text-neutral-500 mt-1'>Download your edited images in high <br />resolution,  ready for any use.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
