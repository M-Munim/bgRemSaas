import React from 'react'
import { assets } from "../assets/assets"

const Result = () => {
    return (
        <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
            <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
                {/* img container */}
                <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
                    {/* left */}
                    <div>
                        <p className='font-semibold text-gray-600 mb-2'>Original Image</p>
                        <img className='rounded-md border' src={assets.image_w_bg} />
                    </div>

                    {/* right */}
                    <div className='flex flex-col'>
                        <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
                        <div className='rounded-md border border-gray-300  relative bg-layer h-full overflow-hidden'>
                            {/* <img className='' src={assets.image_wo_bg} /> */}

                            <div className='absolute right-1/2 bottom-1/2 transform  translate-x-1/2 translate-y-1/2   '>
                                <div className='border-4 border-cyan-600 rounded-full h-12 w-12 border-t-transparent animate-spin'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
                    <button className='px-8 py-3 text-cyan-500 text-sm border border-blue-500 rounded-lg hover:scale-105 transition-all duration-300'>Try Another Image</button>

                    <a href='' className='text-white bg-gradient-to-l from-cyan-600 to-blue-600 px-8 py-3 rounded-lg  hover:scale-105 transition-all duration-300'>Download</a>
                </div>
            </div>
        </div>
    )
}
// 1:22

export default Result
