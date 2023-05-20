import React from 'react';

const PopularToys = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10 mb-6'>Popular Toys</h1>

            <div id="controls-carousel" className="relative w-full h-[250px]" data-carousel="static">
                {/*  Carousel wrapper */} 
                <div className="relative h-56 overflow-hidden md:h-96">
                    {/*  Item 1 */}
                    <div className="grid grid-cols-3 gap-5 hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://t3.ftcdn.net/jpg/04/12/88/22/240_F_412882257_KEF7oFkiaXss2cSiGLtFaYMeEsRJmIux.jpg" className='rounded-lg' alt="..."/>
                        <img src="https://t3.ftcdn.net/jpg/04/12/88/22/240_F_412882257_KEF7oFkiaXss2cSiGLtFaYMeEsRJmIux.jpg" className='rounded-lg' alt="..."/>
                        <img src="https://t3.ftcdn.net/jpg/04/12/88/22/240_F_412882257_KEF7oFkiaXss2cSiGLtFaYMeEsRJmIux.jpg"  alt="..."/>
                    </div>
                    {/*  Item 2 */}
                    <div className="grid grid-cols-3 gap-5 hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="https://t4.ftcdn.net/jpg/04/08/88/79/240_F_408887922_AetUEY50DxMsXgLAHh86YuxnYXsLlikm.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/02/86/04/29/240_F_286042976_yHVCaenhKfl3G1FJysUA8H0gccJLlN1Z.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/02/86/04/29/240_F_286042976_yHVCaenhKfl3G1FJysUA8H0gccJLlN1Z.jpg" alt="..."/>
                    </div>
                    {/*  Item 3 */}
                    <div className="grid grid-cols-3 gap-5 hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://t4.ftcdn.net/jpg/05/89/68/61/240_F_589686184_T20q4VkKma2bwDO7B0J7fqSVTCHwQqOy.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/05/89/68/61/240_F_589686184_T20q4VkKma2bwDO7B0J7fqSVTCHwQqOy.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/05/89/68/61/240_F_589686184_T20q4VkKma2bwDO7B0J7fqSVTCHwQqOy.jpg" alt="..."/>
                    </div>
                    {/*  Item 4 */}
                    <div className="grid grid-cols-3 gap-5 hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://t4.ftcdn.net/jpg/04/08/88/79/240_F_408887922_AetUEY50DxMsXgLAHh86YuxnYXsLlikm.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/04/08/88/79/240_F_408887922_AetUEY50DxMsXgLAHh86YuxnYXsLlikm.jpg" alt="..."/>
                        <img src="https://t4.ftcdn.net/jpg/04/08/88/79/240_F_408887922_AetUEY50DxMsXgLAHh86YuxnYXsLlikm.jpg" alt="..."/>
                    </div>
                    {/*  Item 5 */}
                    <div className="grid grid-cols-3 gap-5 hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://t3.ftcdn.net/jpg/02/34/61/92/240_F_234619240_Yv4z2pSEmK7ipnroxjJAolumHHG0LIKj.jpg" alt="..."/>
                        <img src="https://t3.ftcdn.net/jpg/02/34/61/92/240_F_234619240_Yv4z2pSEmK7ipnroxjJAolumHHG0LIKj.jpg" alt="..."/>
                        <img src="https://t3.ftcdn.net/jpg/02/34/61/92/240_F_234619240_Yv4z2pSEmK7ipnroxjJAolumHHG0LIKj.jpg" alt="..."/>
                    </div>
                </div>
                {/*  Slider controls */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
    );
};

export default PopularToys;