import React from 'react'

function Nav() {
    return (
        <div className='pl-5 flex justify-between pt-3'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className='md:w-24 w-16' />
            <div className='flex items-center font-markBold'>
                <a href='#aboutUs' className='md:text-2xl text-xs bg-white md:px-8 px-2 py-4 border-r cursor-pointer hover:opacity-60 duration-200'>ჩვენს შესახებ</a>
                <a href='#aboutUs' className='md:text-2xl text-xs bg-white md:px-8  px-2 py-4 border-r cursor-pointer hover:opacity-60 duration-200' >სად შევიძინო?</a>
            </div>
        </div>
    )
}

export default Nav