import img1 from '../assets/images/img1.jpg'
const Banner = () => {
    return (
        <div className='relative h-[400px] '>
            <img className='w-full h-[100%] opacity-40' src={img1} alt="" />

            <div className='absolute top-20 text-center w-full'>
                <h1 className='text-6xl font-bold mb-6'>Welcome to</h1>
                <h1 className='text-4xl font-bold mb-6'>Educational and Learning Toys</h1>
                <p className='w-[70%] text-lg font-bold mx-auto'>There are all types of Educational and learning toys available. Learn math and develop skills and understanding to your children by Toys.</p>
            </div>
        </div>
    );
};

export default Banner;
