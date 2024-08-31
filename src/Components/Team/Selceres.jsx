import React from 'react'
import AnimationAirFly from '../../assets/images/Lottie/AnimationAirFly.json'
import AnimationMonkey from '../../assets/images/Lottie/AnimationMonkey.json'
import AnimationHorrertwo from '../../assets/images/Lottie/AnimationHorrertwo.json'



import Lottie from 'lottie-react'
const Selceres = () => {
    return (
        <div className='bg-gradient-to-r from-[#FF722E] to-[#DC5260] relative'>
            <div className="w-1/2 h-1/2 absolute right-0 top-[60px]">
                <Lottie
                    animationData={AnimationAirFly}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>

           
           <div className="w-1/4 h-1/4 absolute right-0 top-[30px] ">
                <Lottie
                    animationData={AnimationMonkey}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>
            <div className="w-1/4 h-1/4 absolute left-0 bottom-[30px] ">
                <Lottie
                    animationData={AnimationHorrertwo}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
                />
            </div>
         

            <div className="container max-w-[1164px] mx-auto px-3">

                <div className="flex justify-center pt-[160px] pb-[261px] max-sm:pb-[200px]">
                    <div className="flex flex-col items-center text-center">
                        <div>
                            <h1 className="font-lato font-extrabold text-6xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl leading-[72px] max-sm:leading-8 text-white max-w-[786px]  animate__animated animate__flipInX">
                                Lorem ipsum dolor sit amet consectetur. Sceleris
                            </h1>
                        </div>
                        <div className="pt-[20px]">
                            <p className="font-montserrat font-medium text-base leading-6 text-white opacity-70  animate__animated animate__animated animate__flash">
                                Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.
                            </p>
                            <div className="max-w-[435px] mt-10 rounded-[15px] p-[7px_21px] bg-[#E9E9E9] border-[1px] border-[#BDBDBD] flex items-center">
                                <div className="flex gap-5 items-center flex-grow">
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.7875 20.6913L17.5735 15.4774C18.8288 13.8062 19.5064 11.7721 19.5041 9.68208C19.5041 4.34342 15.1607 0 9.82206 0C4.4834 0 0.139984 4.34342 0.139984 9.68208C0.139984 15.0207 4.4834 19.3642 9.82206 19.3642C11.9121 19.3664 13.9462 18.6888 15.6173 17.4335L20.8313 22.6475C21.0953 22.8834 21.4395 23.0094 21.7934 22.9995C22.1472 22.9896 22.4839 22.8446 22.7342 22.5942C22.9845 22.3439 23.1295 22.0073 23.1394 21.6534C23.1493 21.2995 23.0234 20.9553 22.7875 20.6913ZM2.90629 9.68208C2.90629 8.31427 3.3119 6.97718 4.07181 5.83988C4.83172 4.70259 5.91182 3.81618 7.17551 3.29274C8.4392 2.7693 9.82974 2.63235 11.1713 2.89919C12.5128 3.16604 13.7451 3.8247 14.7123 4.79189C15.6794 5.75908 16.3381 6.99135 16.6049 8.33288C16.8718 9.67441 16.7348 11.0649 16.2114 12.3286C15.688 13.5923 14.8016 14.6724 13.6643 15.4323C12.527 16.1922 11.1899 16.5978 9.82206 16.5978C7.98856 16.5956 6.23079 15.8663 4.9343 14.5698C3.63782 13.2734 2.90849 11.5156 2.90629 9.68208Z"
                                            fill="#181818"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="outline-none bg-transparent w-full font-lato font-normal text-base leading-5 text-black opacity-[0.52] placeholder:text-black placeholder:opacity-60"
                                    />
                                </div>
                                <div className="sm:hidden pt-8">
                                    <button className="p-[14px_24px] rounded-[14px] hover:bg-white hover:text-[#FF5501] border-[1px] border-transparent duration-500 hover:border-[#FF5501] bg-[#FF5501] text-white font-lato font-semibold text-base leading-5">
                                        Start
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Selceres