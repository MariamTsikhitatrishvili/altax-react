import React from 'react'

function Nav() {
    return (
        <div className='pl-5 flex justify-between pt-5'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className='md:w-20 w-16' />
            <div className='flex items-center font-markBold'>
                <div className='md:text-2xl text-base bg-white md:px-8 px-2 py-4 border-r'>ჩვენს შესახებ</div>
                <div className='md:text-2xl text-base bg-white md:px-8  px-2 py-4 border-r'>სად შევიძინო?</div>
            </div>
        </div>
    )
}

export default Nav