import React, {Component} from 'react'
import HeroImg from '../../static/hero.webp'
export class Hero extends Component {
    render() {
        return (
            <div>
                <section
                    style={{
                    backgroundImage: `url(${HeroImg})`
                }}
                    className="relative  bg-cover bg-center bg-no-repeat lg:w-[80%] mx-auto md:mt-8  ">
                    <div className="absolute inset-0 bg-gradient-to-r from-black"></div>

                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-16">
                        <div className="max-w-xl ">
                            <h1
                                className="text-3xl font-extrabold sm:text-5xl text-white text-center md:text-start tracking-wide">
                                37 DELICIOUS & HEALTHY CASSEROLES
                            </h1>

                            <div className="mt-8 flex flex-wrap gap-4 text-center tracking-wider">
                                <a
                                    href="#"
                                    className="block w-full rounded bg-amber-400  mx-16 sm:mx-10 md:mx-0 px-5 md:px-10 py-3 md:py-5 text-sm  font-medium text-black shadow hover:bg-amber-300 focus:outline-none focus:ring sm:w-auto">
                                    SEE THEM ALL
                                </a>

                            </div>
                        </div>
                    </div>
                </section>

                <div className='h-8 w-full md:w-[90%] lg:w-[80%] bg-[#f2f2f2] mx-auto my-4 md:my-8'>

                </div>
            </div>
        )
    }
}

export default Hero