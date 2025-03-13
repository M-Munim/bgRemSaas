import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
    return (
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-l from-cyan-600 to-blue-600 bg-clip-text text-transparent py-6 md:py-16'>See the magic. Try now</h1>

            <div className='text-center mb-24'>
                <input type="file" name='' id='upload2' hidden />
                <label htmlFor='upload2' className='inline-flex gap-3 px-8 py-3.5 rounded-lg cursor-pointer bg-gradient-to-l from-cyan-600 to-blue-600 m-auto hover:scale-105 transition-all duration-300'>
                    <img width={20} src={assets.upload_btn_icon} />
                    <p className='text-white text-sm font-medium'>Upload Image</p>
                </label>
            </div>
        </div>
    )
}

export default Upload
