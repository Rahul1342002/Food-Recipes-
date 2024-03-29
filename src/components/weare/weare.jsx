import React from 'react';
import p1 from '../../static/we-1.webp';
import p2 from '../../static/we-2.webp';
import p3 from '../../static/we-3.webp';

const Weare = () => {
    return (
        <div className='lg:w-[80%] mx-auto md:mt-8'>
            <div className='flex items-center '>
                <div>
                    <h1 className='text-4xl text-[#2f2f2f]'>WHAT WE'RE CRAVING</h1>
                </div>
                
            </div>

            <div className='flex items-center justify-between my-8 w-full flex-col lg:flex-row'>

            {/*Container_1*/}

                <div className='w-full box-border border-2 h-[40vh] md:h-[55vh] mr-0 lg:mr-4 relative bg-cover bg-center 'style={{ backgroundImage: `url(${p1})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                <div className='h-[40vh] md:h-[55vh] relative flex flex-col  justify-end mx-4 pb-4'>
                    <div>
                        <h1 className='text-white text-sm font-medium'>COLLECTION</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-4xl font-semibold'>TOP 100 COMFORT FOOD RECIPE</h1>
                    </div>
                </div>
                </div>

                {/*Container_2*/}
                <div className='w-full box-border border-2 h-[40vh] md:h-[55vh] mr-0 lg:mr-4 relative mt-6 lg:mt-0 bg-cover bg-center 'style={{ backgroundImage: `url(${p2})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                <div className='h-[40vh] md:h-[55vh] relative flex flex-col  justify-end mx-4 pb-4'>
                    <div>
                        <h1 className='text-white text-sm font-medium'>COLLECTION</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-4xl font-semibold'>TOP 100 COMFORT FOOD RECIPE</h1>
                    </div>
                </div>
                </div>

                {/*Container_3*/}
                <div className='w-full box-border border-2 h-[40vh] md:h-[55vh] mr-0 lg:mr-4 relative mt-6 lg:mt-0 bg-cover bg-center 'style={{ backgroundImage: `url(${p3})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                <div className='h-[40vh] md:h-[55vh] relative flex flex-col  justify-end mx-4 pb-4'>
                    <div>
                        <h1 className='text-white text-sm font-medium'>COLLECTION</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-4xl font-semibold'>TOP 100 COMFORT FOOD RECIPE</h1>
                    </div>
                </div>
                </div>
                

            </div>
        </div>
    );
};

export default Weare;
