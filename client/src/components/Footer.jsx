import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
            <img className='' src={assets.logo} />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright ©<a
                target='_blank' href="https://portfoliomunim.vercel.app/" className='text-cyan-600'>Munim</a> - All right reserved</p>

            <div className='flex gap-1'>
                <img width={40} src={assets.facebook_icon} />
                <img width={40} src={assets.twitter_icon} />
                <img width={40} src={assets.google_plus_icon} />
            </div>
        </div>
    )
}

export default Footer
