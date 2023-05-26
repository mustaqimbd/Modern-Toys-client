import { useContext, useState } from 'react';
import { Context } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import usePageTitle from '../Utilitis/usePageTitle';


const AddToy = ({ toy, closeModal }) => {
    usePageTitle('Modern Toys||Add toys')
    const { user, reload, setReload } = useContext(Context);
    const [pictureUrl, setPictureUrl] = useState(toy?.pictureUrl || '');
    const [name, setName] = useState(toy?.name || '');
    const [sellerName, setSellerName] = useState(user?.displayName || '');
    const [sellerEmail, setSellerEmail] = useState(user?.email || '');
    const [subCategory, setSubCategory] = useState(toy?.subCategory || '');
    const [price, setPrice] = useState(toy?.price || '');
    const [rating, setRating] = useState(toy?.rating || '');
    const [quantity, setQuantity] = useState(toy?.quantity || '');
    const [description, setDescription] = useState(toy?.description || '');
    const resetForm = () => {
        setPictureUrl('');
        setName('');
        setSellerName(user?.displayName && user.displayName);
        setSellerEmail(user?.email && user.email);
        setSubCategory('');
        setPrice('');
        setRating('');
        setQuantity('');
        setDescription('');
    };
    console.log(price);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const toy = { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description }


        fetch('https://modern-toys-server.vercel.app/add-toy', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'The toy successfully added',
                        'success'
                    )
                }
                resetForm();
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Toy adding Failed!',
                    text: 'Something went wrong!',
                })
            })
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        const toyData = { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description }


        fetch(`https://modern-toys-server.vercel.app/update/${toy._id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    setReload(!reload)
                    Swal.fire(
                        'Update Success!',
                        'The toy successfully Updated',
                        'success'
                    )
                }
                resetForm();
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Toy Added Failed!',
                    text: 'Something went wrong!',
                })
            })
    };

    return (
        <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-5 my-5'>
            <label>
                Picture URL of the toy:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="text"
                    value={pictureUrl}
                    onChange={(event) => setPictureUrl(event.target.value)}
                />
            </label>


            <label>
                Name:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>


            <label>
                Seller Name:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="text"
                    value={sellerName}
                    onChange={(event) => setSellerName(event.target.value)}
                />
            </label>


            <label>
                Seller Email:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="email"
                    value={sellerEmail}
                    onChange={(event) => setSellerEmail(event.target.value)}
                />
            </label>


            <label>
                Sub-category:
                <select value={subCategory} onChange={(event) => setSubCategory(event.target.value)} className='block w-[90%] mt-2 rounded-md'>
                    <option value="">Select Sub-category</option>
                    <option value="Math Toys">Math Toys</option>
                    <option value="Engineering toys">Engineering toys</option>
                    <option value="Science Toys">Science Toys</option>
                </select>
            </label>


            <label>
                Price:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(parseInt(event.target.value))}
                />
            </label>


            <label>
                Rating:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="number"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
            </label>


            <label>
                Available Quantity:
                <input className='block w-[90%] mt-2 rounded-md'
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </label>


            <label>
                Detail Description:
                <textarea className='block w-[90%] mt-2 rounded-md'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>
            </label>

            {
                toy ? <span onClick={handleUpdate}>
                    <button onClick={closeModal} className="w-[200px] h-[50px] mx-auto my-auto bg-[#111826] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </span> : <button type="submit" className="w-[200px] h-[50px] mx-auto my-auto bg-[#111826] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Add
                </button>
            }

        </form>
    );
};

export default AddToy;
