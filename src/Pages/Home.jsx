import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery";
import PopularToys from "../Components/PopularToys";
import ShopByCategory from "../Components/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <PopularToys />
        </div>
    );
};

export default Home;