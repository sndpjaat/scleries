import React from 'react';
import laptop_Img from '../../assets/images/webp/laptop_Img.webp';
import Animationsms from '../../assets/images/Lottie/Animationsms.json'
import Lottie from 'lottie-react';


const DigitalServices = () => {
  return (

    <div className="container max-w-[1124px] px-3 mx-auto py-12 sm:py-12 md:py-20 lg:py-24">
      <div className="flex flex-wrap -mx-3 items-center">
        {/* Image Section */}
        <div className="w-full lg:w-4/12 px-3 flex justify-center">
          <img src={laptop_Img} alt="laptop contact" className="w-full max-w-[388px]" />

        </div>

        {/* Content Section */}
        <div className="w-full lg:w-8/12 px-3 flex justify-center lg:justify-end">
          <div className="w-full max-w-[674px] flex flex-col">
            {/* Heading */}
            <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-[#111111] animate__animated animate__lightSpeedInLeft" >
              Get Updated With Us
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-[578px] text-base text-black opacity-60 animate__animated animate__lightSpeedInRight">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.
            </p>

            {/* Form */}
            <form className="w-full mt-7">
              {/* Name and Email Inputs */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative w-full max-w-[325px] " >
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-4 py-3 text-sm text-black bg-transparent border border-gray-300 rounded-md outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-3 left-4 text-sm text-black duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#111111]"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative w-full max-w-[325px]">
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 text-sm text-black bg-transparent border border-gray-300 rounded-md outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-3 left-4 text-sm text-black duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#111111]"
                  >
                    Your Email Address
                  </label>
                </div>
              </div>

              {/* Password Inputs */}
              <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <div className="relative w-full max-w-[325px]">
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-4 py-3 text-sm text-black bg-transparent border border-gray-300 rounded-md outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute top-3 left-4 text-sm text-black duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#111111]"
                  >
                    Password
                  </label>
                </div>

                <div className="relative w-full max-w-[325px]">
                  <input
                    type="password"
                    id="confirm_password"
                    className="block w-full px-4 py-3 text-sm text-black bg-transparent border border-gray-300 rounded-md outline-none peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="confirm_password"
                    className="absolute top-3 left-4 text-sm text-black duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#111111]"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="bg-[#92140C] text-white text-nowrap font-semibold text-lg rounded-md px-6 py-3 mt-12 w-full max-w-[166px] border border-transparent hover:bg-white hover:text-[#92140C] hover:border-[#92140C] transition duration-500" > Send Message </button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        <div className="w-1/4 h-1/4">
          <Lottie
            animationData={Animationsms}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
          />
        </div>


      </div>

    </div>



  );
};

export default DigitalServices;
