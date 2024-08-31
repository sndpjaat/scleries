import React from 'react'
import AnimationAirFly from '../../assets/images/Lottie/AnimationAirFly.json'
import Lottie from 'lottie-react'

const Footer = ({backgroundColor}) => {
  return (
    <>
     <div className={`${backgroundColor} relative `} >
     <div className="w-1/2 h-1/2 absolute right-0 top-[60px]">
                <Lottie
                    animationData={AnimationAirFly}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>
      <div className="container max-w-[1164px] mx-auto px-3 pt-[78px] pb-[61px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-6/12 w-full px-3">
            <a href="" className="font-lato font-bold text-[38px] animate__animated animate__flipInY leading-[45px] text-[#FF5501]">
              Logo <span className="text-white">Here</span>
            </a>
            <p className="font-lato font-normal text-base leading-5 text-white lg:max-w-[431px] opacity-[0.7] pt-4">
              Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.
            </p>
          </div>
          <div className="lg:w-3/12 max-lg:pt-12 w-6/12 px-3">
            <ul>
              <li className="pb-2">
                <a href="" className="font-lato font-semibold text-lg leading-7 animate__animated animate__lightSpeedInLeft  text-white">About website</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 text-white duration-500 animate__animated animate__lightSpeedInLeft  hover:opacity-[100%] opacity-[70%]">Home</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 text-white duration-500 animate__animated animate__lightSpeedInLeft  hover:opacity-[100%] opacity-[70%]">How It Works</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 text-white duration-500 animate__animated animate__lightSpeedInLeft  hover:opacity-[100%] opacity-[70%]">Testimonials</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 text-white duration-500 animate__animated animate__lightSpeedInLeft  hover:opacity-[100%] opacity-[70%]">Why Choose Us</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/12 max-lg:pt-12 w-6/12 px-3">
            <ul>
              <li className="pb-2">
                <a href="" className="duration-500 hover:opacity-[100%] font-lato font-semibold animate__animated animate__lightSpeedInRight  text-lg leading-7 text-white">Follow links</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 animate__animated animate__lightSpeedInRight text-white opacity-[70%]">Instagram</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 animate__animated animate__lightSpeedInRight text-white opacity-[70%]">Twitter</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 animate__animated animate__lightSpeedInRight text-white opacity-[70%]">Discord</a>
              </li>
              <li className="pt-4">
                <a href="" className="font-lato font-normal leading-5 animate__animated animate__lightSpeedInRight text-white opacity-[70%]">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white opacity-40"></div>
      <div className="py-6 flex justify-center">
        <h3 className="font-lato font-normal text-base leading-5 text-white opacity-70 ">Copyright© 2024 All Rights Reserved.</h3>
      </div>
    </div>


    </>
  )
}

export default Footer