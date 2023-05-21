import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(Context);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const auth = getAuth()
    const hanldeSingUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                }).then(() => setSuccess('successfully account created'))
                    .catch(err => setError(err.massage))
            })
            .catch(err => setError(err.message))
    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={hanldeSingUp} className="bg-white px-6 py-8 rounded drop-shadow-2xl text-black w-full">
                        <h1 className="mb-4 text-3xl font-bold text-center">Sign up</h1>
                        {
                            error && <p className='text-red-700'>{error}</p>
                        }
                        {success && <p className='text-blue-700'>{success}</p>}
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 mt-4"
                            name="name"
                            placeholder="Enter Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required />
                        <input
                            type="url"
                            className="block border border-grey-light w-full p-3 rounded"
                            name="photo"
                            placeholder="Enter photo url" />
                        <div className="text-gray-700 mb-4 mt-1 text-center">
                            Already have an account?
                            <Link to='/login' className="no-underline border-b border-blue text-blue-500 ml-2 font-bold hover:text-blue-700">
                                Log in
                            </Link>.
                        </div>
                        <button
                            type="submit"
                            className="w-full text-center py-2 text-lg font-medium rounded text-white bg-[#111826] hover:bg-blue-800  focus:outline-none my-1"
                        >Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;