import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            {/* Left Side */}
            <div>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Instantly Remove <br className='max-sm:hidden' /> <span className='bg-gradient-to-l from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Backgrounds:</span>  Transform Your <br className='max-sm:hidden' /> Images in Seconds!</h1>

                <p className='text-neutral-500 my-3  text-sm'>Say goodbye to complicated editing! Our free background removal tool <br className='max-sm:hidden' /> makes it simple to create stunning, professional-quality images with just a few clicks.<br className='max-sm:hidden' />  Perfect for personal and business needs alike.</p>

                <div>
                    <input type="file" name='' id='upload1' hidden />
                    <label htmlFor='upload1' className='inline-flex gap-3 px-8 py-3.5 rounded-lg cursor-pointer bg-gradient-to-l from-cyan-600 to-blue-600 m-auto hover:scale-105 transition-all duration-300'>
                        <img width={20} src={assets.upload_btn_icon} />
                        <p className='text-white text-sm font-medium'>Upload Image</p>
                    </label>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-full max-w-md'>
                <img src={assets.header_img} />
            </div>
        </div>
    )
}

export default Header
