import React from 'react'

function Nav() {
    return (
        <div className='pl-5 flex justify-between pt-5'>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className='w-20' />
            <div className='flex items-center '>
                <div className='md:text-2xl text-lg bg-white md:px-8 px-4 py-4 border-r'>ჩვენს შესახებ</div>
                <div className='md:text-2xl text-lg bg-white md:px-8  px-4 py-4 border-r'>სად შევიძინო?</div>
            </div>
        </div>
    )
}

export default Nav