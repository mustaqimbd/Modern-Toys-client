import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const NewProducts = () => {
    const allToys = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-4'>Our new products</h1>
            <Marquee pauseOnHover>
                <div className="flex gap-5 ml-5">
                    {
                        allToys.map(toy => <div key={toy._id} className="w-[280px]"><Card toy={toy}></Card></div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default NewProducts;