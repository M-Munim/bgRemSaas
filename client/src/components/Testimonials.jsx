import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-l from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Customer Testimonials</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4  py-8'>
                {
                    testimonialsData.map((item, i) => (
                        <div className='bg-white rounded-2xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700' key={i}>
                            <p className='text-4xl text-gray-500'>"</p>
                            <p className='text-sm text-gray-500'>{item.text}</p>
                            <div className='flex items-center gap-3 mt-5'>
                                <img src={item.image} className='w-9 rounded-full' />
                                <div>
                                    <p>{item.author}</p>
                                    <p className='text-sm text-gray-600'> {item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials
