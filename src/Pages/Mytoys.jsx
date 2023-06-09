import { useContext, useEffect, useState } from 'react';
import { Context } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import ToyModal from '../Components/Modal';
import Swal from 'sweetalert2';
import usePageTitle from '../Utilitis/usePageTitle';

const Mytoys = () => {
    usePageTitle('Modern Toys||My Toys')
    const { user, reload, setReload } = useContext(Context);
    const [toys, setToys] = useState([]);

   

    useEffect(() => {
        fetch(`https://modern-toys-server.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
               
            })
            .catch(err => console.log(err))
    }, [user?.email, reload])

    const toyDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://modern-toys-server.vercel.app/delete-toy/${id}`,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Delete Success!',
                                'The toy successfully Updated',
                                'success'
                            )
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Delete Failed!',
                            text: 'Something went wrong!',
                        })
                    })
            }
        })
    }
    const sortToy = (text) => {
        fetch(`https://modern-toys-server.vercel.app/my-toys/${text}${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container mx-auto px-4 mt-5">
            <div className='flex mb-4'>
                <select onChange={(e) => sortToy(e.target.value)} className='block mt-2 rounded-md mx-auto'>
                    <option value=''>Sort by price</option>
                    <option value="ascending/">Low to high price</option>
                    <option value="descending/">High to low price</option>
                </select>
            </div>

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
                        toys.map(toy => <Row toy={toy} key={toy._id} toyDelete={toyDelete} />)
                    }
                </tbody>
            </table>
        </div>

    );
};
const Row = ({ toy, toyDelete }) => {
    const { _id, name, pictureUrl, sellerName, sellerEmail, subCategory, price, quantity, rating, description, } = toy;
    return (
        <tr className='text-center'>
            <td className="py-2 px-4 border-b">{sellerName}</td>
            <td className="py-2 px-4 border-b">{name}</td>
            <td className="py-2 px-4 border-b">{subCategory}</td>
            <td className="py-2 px-4 border-b">{price}</td>
            <td className="py-2 px-4 border-b">{quantity}</td>
            <td className="py-2 px-4 border-b flex gap-4">
                <div>
                    {/* update toy */}
                    <ToyModal toy={toy} />
                </div>
                <button onClick={() => toyDelete(_id)} className="bg-[#111826] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Delete
                </button>

            </td>
        </tr>

    );
}
export default Mytoys;