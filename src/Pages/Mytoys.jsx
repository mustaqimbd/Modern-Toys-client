import { useContext, useEffect, useState } from 'react';
import { Context } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Mytoys = () => {
    const { user } = useContext(Context);
    const [toys, setToys] = useState([]);
    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                console.log(data, 'data')
            })
            .catch(err => console.log(err))
    }, [user?.email])
    return (
        <div className="container mx-auto px-4 mt-5">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Seller</th>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Toy Name</th>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Category</th>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Price</th>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Available Quantity</th>
                        <th className="py-2 px-4 border-b font-bold uppercase text-gray-800">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <Row toy={toy} key={toy._id} />)
                    }
                </tbody>
            </table>
        </div>

    );
};
const Row = ({ toy }) => {
    const { _id, name, pictureUrl, sellerName, sellerEmail, subCategory, price, quantity, rating, description, } = toy;
    return (
        <tr className='text-center'>
            <td className="py-2 px-4 border-b">{sellerName}</td>
            <td className="py-2 px-4 border-b">{name}</td>
            <td className="py-2 px-4 border-b">{subCategory}</td>
            <td className="py-2 px-4 border-b">{price}</td>
            <td className="py-2 px-4 border-b">{quantity}</td>
            <td className="py-2 px-4 border-b flex gap-4">
                <Link to={`/toy/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
        </tr>

    );
}
export default Mytoys;