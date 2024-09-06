import React from 'react';
import { useLocation } from 'react-router-dom';
import TwoMen from '../../assets/images/svg/TwoMen.svg';

const cardColors = [
    '#CFEEFF',
    '#E3FFE4',
    '#FFE4E3',
    '#E4E3FF',
    '#FFFAE4',
    '#E4FFF9'
];

const cardData = [
    { id: 1, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' },
    { id: 2, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' },
    { id: 3, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' },
    { id: 4, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' },
    { id: 5, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' },
    { id: 6, title: 'Lorem ipsum', description: 'We have developed, capitalized, advised, and invested in $XXXmm of renewable energy projects over our careers. Read more' }
];

const Ispum = () => {
    const location = useLocation();
    const getColorIndex = () => {
     
        return Math.abs(location.pathname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % cardColors.length;
    };

    const colorIndex = getColorIndex();
    return (
        <div className='container max-w-[1164px] px-3 mx-auto'>
            <div className="flex flex-wrap -mx-3 pt-4 pb-[140px] max-sm:pb-[60px]">
                {cardData.map((card, index) => (
                    <div key={card.id} className="pt-6 md:w-6/12 lg:w-4/12 px-3 flex justify-center w-full">
                        <div
                            className={`${index === 0 ? "bg-red-300" : index === 1 ? "bg-blue-300" : index === 2 ? "bg-red-200": "bg-slate-400"   } duration-300 hover:shadow-btn Shadow p-[20px_30px] animate__animated animate__rotateInDownLeft rounded-[23px] max-w-[365px] border-[2px] border-[#FFFFFF]`}
                        >
                            <img src={TwoMen} alt="TwoMen" className='pointer-events-none' />
                            <h2 className="pt-8 font-Inter font-semibold leading-6 text-[#101010] animate__animated animate__flipInY ">{card.title}</h2>
                            <p className="pt-4 max-w-[305px] font-Inter font-light text-base animate__rotateInDownLeft leading-6">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ispum;
