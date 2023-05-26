import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const HomeCarousel = () => {
    const items = [
        {
            img: '../../src/assets/images/img1.jpg',
            name: "Math Learning Toys",
            description: "Learn math and develop mathematical skills and understanding to your children by Toys"
        },
        {
            img: '../../src/assets/images/img2.jpg',
            name: "Engineering Toys",
            description: "Learn to your children in hands-on activities, creativity, problem-solving, critical thinking, and an understanding of engineering principles by Toys."
        },
        {
            img: '../../src/assets/images/img3.jpg',
            name: "Math Learning Toys",
            description: "Learn math and develop mathematical skills and understanding to your children by Toys"
        },
        {
            img: '../../src/assets/images/img4.jpg',
            name: "Science Kits Toys",
            description: "Facilitate hands-on learning and exploration of scientific concepts and principles by toys."
        },
        {
            img: '../../src/assets/images/img5.jpg',
            name: "Engineering Tools Toys",
            description: "Introduce children to the tools and equipment commonly used in engineering and construction fields by toys."
        },
    ]
    return (
        <div>
            <Carousel navButtonsAlwaysInvisible>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

const Item = ({ item }) => {
    return (
        < Paper >
            <div className='relative'>
                <div className='h-[450px]'>
                    <img src={item.img} className='h-[100%] w-[100%] rounded' alt="" />
                </div>
                <div className='absolute top-40 left-[15%] right-[15%] bg-gray-200 bg-opacity-40 p-5'>
                    <h1 className='text-6xl font-bold mb-4 text-center'>{item.name}</h1>
                    <p className=' text-lg font-bold'>{item.description}</p>
                </div>

            </div>
        </Paper >
    )
}
export default HomeCarousel;