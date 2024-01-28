import React from 'react';
import p1 from '../../static/ex-1.webp';
import p2 from '../../static/ex-2.webp';
import p3 from '../../static/ex-3.webp';
import p4 from '../../static/ex-4.webp';
import p5 from '../../static/ex-5.webp';
import p6 from '../../static/ex-6.webp';

const Explore = () => {
    return (
        <div className='lg:w-[80%] mx-auto md:mt-8'>
            <div className='flex items-center '>
                <div>
                    <h1 className='text-4xl text-[#2f2f2f]'>WHAT WE'RE CRAVING</h1>
                </div>

            </div>

            <div
                className='flex items-center justify-between my-8 w-full flex-col lg:flex-row'>

                {/*Container_1*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p1})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>COMFORT FOOD CLASSICS</p>
                    </div>
                </div>
                {/*Container_2*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p2})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>INTERNATIONAL EATS</p>
                    </div>
                </div>

                {/*Container_3*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p3})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>BREAKFAST & LUNCH</p>
                    </div>
                </div>

                {/*Container_4*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p4})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>cOMMUNITY PICKS</p>
                    </div>
                </div>

                {/*Container_5*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p5})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>QUICK & EASY</p>
                    </div>
                </div>

                {/*Container_6*/}
                <div>
                    <div
                        className='w-40 box-border border-2 h-[15vh] md:h-40   relative bg-cover bg-center rounded-full'
                        style={{
                        backgroundImage: `url(${p6})`
                    }}></div>   
                    <div className='flex justify-center item-center w-40'>
                        <p className='text-base text-[#2f2f2f] text-center mt-2'>COPYCAT RECIPES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
