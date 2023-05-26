import { useEffect } from "react";
import Gallery from "../Components/Gallery";
import NewProducts from "../Components/NewProducts";
import PopularToys from "../Components/PopularToys";
import ShopByCategory from "../Components/ShopByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';
import usePageTitle from "../Utilitis/usePageTitle";
import HomeCarousel from "../Components/HomeCarousel";

const Home = () => {
    usePageTitle('Modern Toys||Home page')
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <HomeCarousel />
            <div data-aos="fade-left"><Gallery /></div>
            <div data-aos="fade-right"><ShopByCategory /></div>

            <PopularToys />
            <div data-aos="fade-up"><NewProducts /></div>
        </div>
    );
};

export default Home;