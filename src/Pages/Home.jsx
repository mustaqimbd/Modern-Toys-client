import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery";
import NewProducts from "../Components/NewProducts";
import PopularToys from "../Components/PopularToys";
import ShopByCategory from "../Components/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <PopularToys />
            <NewProducts />
        </div>
    );
};

export default Home;