import Banner from "../Components/Banner";
import Carousel from "../Components/Carousel";
import Gallery from "../Components/Gallery";

const items = [
    {
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/24/42/21/1000_F_324422176_Lgn7NTeFyNaUKIDu0Ppls1u8zb8wsKS4.jpg',
        altText: 'Image 1',
    },
    {
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/00/48/10/67/1000_F_48106748_5uLqRWQ7bp328aOWJ5SxXaEQ7g4AcHQY.jpg',
        altText: 'Image 2',
    },
    {
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/36/91/39/1000_F_436913971_kV5MgMucb3VQYlH8lVV3y6bi8JfVgAdG.jpg',
        altText: 'Image 3',
    },
    // Add more items as needed
];

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            {/* <Carousel items={items} /> */}
        </div>
    );
};

export default Home;