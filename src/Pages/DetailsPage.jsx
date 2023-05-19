import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const data = useLoaderData()
    const { name, pictureUrl, sellerName, sellerEmail, subCategory, price, quantity, rating, description, } = data;
    console.log(data);
    return (
        <>
        <div className="flex mt-10">
            <img className="object-cover max-w-[70%] rounded-lg" src={pictureUrl} alt="" />
            <div className="flex flex-col p-6 justify-between">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div>
                    <h1 className="font-bold">Seller Information</h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">{sellerName}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{sellerEmail}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Price ${price}</h1>
                    <p>Rating : {rating}</p>
                    <p className="my-3">Category : {subCategory}</p>
                    <p>Available Quantity : {quantity}</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
        <p className="my-6"><span className="text-lg font-bold">Description : </span> {description}</p>
        </>
    );
};

export default DetailsPage;