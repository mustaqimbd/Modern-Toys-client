import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const data = useLoaderData();
    const [allToys, setAllToys] = useState(data);
    const [search, setSearch] = useState('')
    
    const handleSearch = () => {
        fetch(`http://localhost:5000/all-toys/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
            .catch(err => console.log(err))
    }
    console.log(allToys, search,data);
    return (
        <div>
            <div className='flex mt-5'>
                <div className="flex items-center gap-5 mx-auto">
                    <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} required placeholder="Search" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        Search
                    </button>
                </div>

            </div>
            <div className="container mx-auto px-4 mt-5">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Seller</th>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Toy Name</th>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Sub-category</th>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Price</th>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Available Quantity</th>
                            <th className="py-2 px-4 border-b font-bold uppercase text-gray-800"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <Row toy={toy} key={toy._id} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};
const Row = ({ toy }) => {
    const { name, pictureUrl, sellerName, sellerEmail, subCategory, price, quantity, rating, description, } = toy;
    return (
        <tr className='text-center'>
            <td className="py-2 px-4 border-b">{sellerName}</td>
            <td className="py-2 px-4 border-b">{name}</td>
            <td className="py-2 px-4 border-b">{subCategory}</td>
            <td className="py-2 px-4 border-b">{price}</td>
            <td className="py-2 px-4 border-b">{quantity}</td>
            <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </td>
        </tr>

    );
}

export default AllToys;