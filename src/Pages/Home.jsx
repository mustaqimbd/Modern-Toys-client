import HomeCarousel from "../Components/Carousel";
import Gallery from "../Components/Gallery";
import NewProducts from "../Components/NewProducts";
import PopularToys from "../Components/PopularToys";
import ShopByCategory from "../Components/ShopByCategory";


const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <Gallery />
            <ShopByCategory />
            <PopularToys />
            <NewProducts />
        </div>
    );
};

export default Home;