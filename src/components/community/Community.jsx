import React from 'react';
import p1 from '../../static/com-1.png';
import p2 from '../../static/com-2.png';
import p3 from '../../static/com-3.png';

const Community = () => {
    return (
        <div className='lg:w-[80%] mx-4 lg:mx-auto md:mt-8  '>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h1 className='text-4xl text-[#2f2f2f]'>FRESH FROM OUR COMMUNITY</h1>
                </div>
                <div>
                    <a href="/" className='text-[#1769c2] text-base'>View All</a>
                </div>
            </div>

            <div className='flex items-center flex-col lg:flex-row justify-between my-8 w-full p-4 lg:p-0'>

            {/*Container_1*/}

                <div className='w-full box-border border-2 h-[40vh] lg:h-[55vh] mr-0 lg:mr-4 relative '>
                    <div className='absolute top-0 left-0'>
                        <div className='flex m-4'>
                            <div className='w-14'>
                                <img src={p1} alt="" className="rounded-full"/>
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-medium text-lg w-full'>
                                    <span className='text-blue-600'>Anonymous </span>
                                    asked a question
                                    <br/>about
                                    <span className='text-blue-600'> Red Sauce for Tamales or</span>...
                                </h1>
                            </div>
                        </div>
                        <div className='m-4'>
                            <p className='text-base text-gray-600'>I would like to make a Brie Fondue to add
                                to Turkey Dogs with Jalapeno Cranberry Relish. Do you think the flavor of this
                                Brie Fondue would clash with the Jalapeno Cranberry Relish/should I tweak some
                                of the ingredients? Thanks!
                            </p>
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <div className='flex m-4 text-sm justify-between'>
                            <div className='flex items-center'>
                                <p className='mr-4 text-gray-500'>2 HOURS AGO</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2 text-sm text-gray-500'>REPLY</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="red"
                                    className="w-5 h-5">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Container_2*/}

                <div className='w-full box-border border-2 h-[40vh] lg:h-[55vh] mr-0 lg:mr-4 relative mt-6 lg:mt-0 '>
                    <div className='absolute top-0 left-0'>
                        <div className='flex m-4'>
                            <div className='w-14'>
                                <img src={p2} alt="" className="rounded-full"/>
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-medium text-lg w-full'>
                                    <span className='text-blue-600'>Anonymous </span>
                                    asked a question
                                    <br/>about
                                    <span className='text-blue-600'> Red Sauce for Tamales or</span>...
                                </h1>
                            </div>
                        </div>
                        <div className='m-4'>
                            <p className='text-base text-gray-600'>I would like to make a Brie Fondue to add
                                to Turkey Dogs with Jalapeno Cranberry Relish. Do you think the flavor of this
                                Brie Fondue would clash with the Jalapeno Cranberry Relish/should I tweak some
                                of the ingredients? Thanks!
                            </p>
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <div className='flex m-4 text-sm justify-between'>
                            <div className='flex items-center'>
                                <p className='mr-4 text-gray-500'>2 HOURS AGO</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2 text-sm text-gray-500'>REPLY</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="red"
                                    className="w-5 h-5">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Container_3*/}

                <div className='w-full box-border border-2 h-[40vh] lg:h-[55vh] mr-0 lg:mr-4 relative mt-6 lg:mt-0 '>
                    <div className='absolute top-0 left-0'>
                        <div className='flex m-4'>
                            <div className='w-14'>
                                <img src={p3} alt="" className="rounded-full"/>
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-medium text-lg w-full'>
                                    <span className='text-blue-600'>Anonymous </span>
                                    asked a question
                                    <br/>about
                                    <span className='text-blue-600'> Red Sauce for Tamales or</span>...
                                </h1>
                            </div>
                        </div>
                        <div className='m-4'>
                            <p className='text-base text-gray-600'>I would like to make a Brie Fondue to add
                                to Turkey Dogs with Jalapeno Cranberry Relish. Do you think the flavor of this
                                Brie Fondue would clash with the Jalapeno Cranberry Relish/should I tweak some
                                of the ingredients? Thanks!
                            </p>
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <div className='flex m-4 text-sm justify-between'>
                            <div className='flex items-center'>
                                <p className='mr-4 text-gray-500'>2 HOURS AGO</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2 text-sm text-gray-500'>REPLY</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="red"
                                    className="w-5 h-5">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;
