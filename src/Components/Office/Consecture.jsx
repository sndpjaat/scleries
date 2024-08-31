import React from 'react'
import AnimationMellow from '../../assets/images/Lottie/AnimationMellow.json'
import AnimationHorrer from '../../assets/images/Lottie/AnimationHorrer.json'
import Lottie from 'lottie-react'

const Consecture = () => {
  return (
    <div className='bg-[#43BBFF] relative'>
       <div className="w-1/2 h-1/2 absolute right-0 top-[30px] ">
                <Lottie
                    animationData={AnimationMellow}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>
            <div className="w-1/3 h-1/3 absolute left-0 top-[30px] ">
                <Lottie
                    animationData={AnimationHorrer}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>
         <div className="container max-w-[1164px] mx-auto px-3">
      <div className="flex justify-center pt-[160px] pb-[261px] max-sm:pt-[120px] max-sm:pb-[160px]">
        <div className="flex flex-col items-center text-center">
          <div>
            <h1 className="font-lato font-extrabold text-6xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl animate__animated animate__zoomInUp leading-[72px] max-sm:leading-8 text-white max-w-[786px]">
              Lorem ipsum dolor sit amet consectetur. Sceleris
            </h1>
          </div>
          <div className="pt-[20px]">
            <p className="font-montserrat font-medium animate__animated animate__slideInUp text-base leading-6 text-white opacity-70">
              Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.
            </p>
          </div>
          <div className="flex gap-7 pt-[35px] max-sm:pt-[28px]">
            <button className="font-lato font-semibold text-base animate__animated animate__heartBeat leading-5 text-[#43BBFF] rounded-[58px] py-[14px] px-[24px] bg-white hover:shadow-btnShadow border-[1px] border-transparent hover:border-white hover:text-white hover:bg-[#43BBFF] duration-500">
              Sign up
            </button>
            <button className="font-lato font-semibold text-base animate__animated animate__heartBeat leading-5 text-white rounded-[58px] py-[14px] px-[24px] bg-[#43BBFF] hover:bg-[#43BBFF] hover:shadow-btnShadow border-[1px] border-white hover:border-[#43BBFF] duration-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Consecture