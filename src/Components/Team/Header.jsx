import React from 'react'
import { Link } from 'react-router-dom'


import { navItems } from '../../common/Helper'



const Header = () => {

    return (
        <>
            <div className="bg-[#F7F7F7] rounded-[0px_0px_30px_30px]">
                <div className='container max-w-[1164px] mx-auto px-3 py-[26px]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-lato font-bold text-[38px] max-sm:text-[30px] leading-[45px] text-black animate__animated animate__lightSpeedInLeft'>
                            Logo
                        </h3>
                        <div className='right-[-100%] flex gap-[139px] max-lg:gap-14 items-center justify-between z-[50] max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300'>
                            <ul className='flex gap-[26px] max-lg:gap-14 items-center max-lg:flex-col'>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        {item.isExternal ? (
                                            <a className='font-lato text-base max-lg:text-xl font-medium text-black  animate__animated animate__rollIn leading-5 hover:text-[#FF5501] ' href={item.to}>
                                                {item.text}
                                            </a>
                                        ) : (
                                            <Link to={item.to} className='font-lato text-base max-lg:text-xl font-medium animate__animated animate__rollIn text-black leading-5 hover:text-[#FF5501]'>
                                                {item.text}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex max-lg:gap-10 gap-6 max-lg:flex-col'>
                                <button className='bg-white font-lato font-semibold text-base leading-5 hover:text-white hover:bg-[#FF5501] animate__animated animate__lightSpeedInRight duration-500 text-[#FF5501] border-[1px] border-[#FF5501] p-[14px_24px] rounded-[14px]'>
                                    Login
                                </button>
                                <button className='p-[14px_24px] rounded-[14px] hover:bg-white hover:text-[#FF5501] border-[1px] border-transparent animate__animated animate__lightSpeedInRight duration-500 hover:border-[#FF5501] bg-[#FF5501] text-white font-lato font-semibold text-base leading-5'>
                                    Sign Up
                                </button>
                            </div>

                        </div>
                        <div className='lg:hidden cursor-pointer block z-50'>
                            <span className='bar h-[3px] block cursor-pointer bg-black w-[25px] custom_duration'></span>
                            <span className='bar h-[3px] block cursor-pointer bg-black w-[25px] my-[6px]'></span>
                            <span className='bar h-[3px] block cursor-pointer bg-black w-[25px] custom_duration'></span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Header