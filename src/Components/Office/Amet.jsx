import React from 'react'
import { ametItems } from '../../common/Helper'
import { Link } from 'react-router-dom'
import ShoppingIcon from '../../assets/images/svg/ShoppingIcon.svg'
import UserIcon from '../../assets/images/svg/UserIcon.svg'


const Amet = () => {
    return (
        <>
            <div className="bg-[#43BBFF]">
                <div className='container max-w-[1164px] mx-auto px-3 py-[26px]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-lato font-bold text-[38px] animate__animated animate__lightSpeedInLeft max-sm:text-[30px] leading-[45px] text-white'>
                        Logo Here
                        </h3>
                        <div className='right-[-100%] flex gap-[139px] max-lg:gap-14 items-center justify-between z-[50] max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300'>
                            <ul className='flex gap-[26px] max-lg:gap-14 items-center max-lg:flex-col'>
                                {ametItems.map((item, index) => (
                                    <li key={index}>
                                        {item.isExternal ? (
                                            <a className='font-lato text-base max-lg:text-xl font-medium text-white leading-5 hover:text-[#FF5501]' href={item.to}>
                                                {item.text}
                                            </a>
                                        ) : (
                                            <Link to={item.to} className='font-lato text-base max-lg:text-xl font-medium text-white leading-5 hover:text-[#FF5501]'>
                                                {item.text}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex gap-7 max-lg:flex-col animate__animated animate__lightSpeedInRight ">
                                <img src={UserIcon} alt="UserIcon" />
                                <img src={ShoppingIcon} alt="ShoppingIcon" />

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

export default Amet