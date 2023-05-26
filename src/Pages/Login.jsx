import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import usePageTitle from '../Utilitis/usePageTitle';


const Login = () => {
    usePageTitle('Modern Toys||Login')
    const { userLogin, googleSignIn } = useContext(Context);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state?.pathname || '/';
    

    const hanldeSingIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogin(email, password)
            .then(result => {
                
                setSuccess('Successfully Log in!')
                navigate(redirectTo, { replace: true })
            })
            .catch(err => setError('Email or Password wrong!'))
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                setSuccess('Successfully Log in!')
                navigate(redirectTo, { replace: true })
            })
            .catch(e => setError(e.message))
    }

    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded drop-shadow-2xl text-black w-full">
                        <h1 className="mb-4 text-3xl font-bold text-center">Login</h1>
                        {
                            error && <p className='text-red-700 text-center'>{error}</p>
                        }
                        {success && <p className='text-blue-700 text-center'>{success}</p>}
                        <form onSubmit={hanldeSingIn}>
                            <input
                                type="text"
                                className="block border mt-4 border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" required />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded"
                                name="password"
                                placeholder="Password"
                                required />
                            <div className="text-gray-700 mb-5 mt-1 text-center">
                                Do not have an account? Please
                                <Link to='/sign-up' className="no-underline border-b border-blue text-blue-500 ml-2 font-bold hover:text-blue-700">
                                    Sign up
                                </Link>.
                            </div>
                            <button
                                type="submit"
                                className="w-full text-center text-lg font-medium py-2 rounded text-white bg-[#111826] hover:bg-blue-800 focus:outline-none my-1"
                            >Login</button>
                        </form>
                        <div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex py-2 text-lg font-medium rounded text-white bg-[#111826] hover:bg-blue-800 focus:outline-none my-1 mt-6"
                            ><span className='flex gap-2 items-center mx-auto'><FaGoogle /> Sign in with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;