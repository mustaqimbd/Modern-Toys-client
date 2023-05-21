import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'

const PopularToys = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10 mb-6'>Popular Toys</h1>
            <div className=' grid grid-cols-3 gap-5'>
                <div className='relative'>
                <img src={img1} alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                <div className='relative'>
                <img src={img5} alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                <div className='relative'>
                <img src={img4} alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                <div className='relative'>
                <img src={img3} alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                <div className='relative'>
                <img src={img2} alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                <div className='relative'>
                <img src="https://t3.ftcdn.net/jpg/04/12/88/22/240_F_412882257_KEF7oFkiaXss2cSiGLtFaYMeEsRJmIux.jpg" alt="" />
                <button className="text-white absolute top-[40%] left-[30%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-40 hover:opacity-100 ">Buy now</button>
                </div>
                
            </div>
        </div>
    );
};

export default PopularToys;