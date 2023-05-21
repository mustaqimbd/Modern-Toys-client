import React from 'react';

const HomeCarousel = () => {
    return (
        <div>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-[450px]">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://as2.ftcdn.net/v2/jpg/02/86/04/29/1000_F_286042976_yHVCaenhKfl3G1FJysUA8H0gccJLlN1Z.jpg" className="absolute block object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Carousel image" />
                        <div className='absolute top-40 left-11'>
                            <h1 className='text-6xl font-bold mb-6'>Math Learning Toys</h1>
                            <p className='w-[70%] text-lg font-bold'>Learn math and develop mathematical skills and understanding to your children by Toys</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://as2.ftcdn.net/v2/jpg/02/57/71/71/1000_F_257717109_rRo1r1IT6pXioUGwqU9P4GmycqfCyQdg.jpg" className="absolute block object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="..." />
                        <div className='absolute top-40 left-11'>
                            <h1 className='text-6xl font-bold mb-6'>Engineering Toys</h1>
                            <p className='w-[50%] text-lg font-bold'>Learn to your children in hands-on activities, creativity, problem-solving, critical thinking, and an understanding of engineering principles by Toys. </p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://as2.ftcdn.net/v2/jpg/02/65/29/13/1000_F_265291349_2INmfj7Z62lDZ33eCwkND7RPSWguEgB6.jpg" className="absolute block object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Carousel image" />
                        <div className='absolute top-40 left-11'>
                            <h1 className='text-6xl font-bold mb-6'>Math Learning Toys</h1>
                            <p className='w-[70%] text-lg font-bold'>Learn math and develop mathematical skills and understanding to your children by Toys</p>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://as1.ftcdn.net/v2/jpg/01/17/98/80/1000_F_117988080_HODTgclrdjLjBvHtwGHQTw1ogiJZkGPr.jpg" className="absolute block object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Carousel image" />
                        <div className='absolute top-40 left-11'>
                            <h1 className='text-6xl font-bold mb-6'>Science Kits Toys</h1>
                            <p className='w-[70%] text-lg font-bold'>Facilitate hands-on learning and exploration of scientific concepts and principles by toys.</p>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://as2.ftcdn.net/v2/jpg/05/84/66/01/1000_F_584660103_XC3tnL9SsfsbQaDBI6csLFRIGiz83gkT.jpg" className="absolute block object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Carousel image" />
                        <div className='absolute top-40 left-11'>
                            <h1 className='text-6xl font-bold mb-6'>Engineering Tools Toys</h1>
                            <p className='w-[70%] text-lg font-bold'>Introduce children to the tools and equipment commonly used in engineering and construction fields by toys. </p>
                        </div>
                    </div>
                </div>

                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
    );
};

export default HomeCarousel;