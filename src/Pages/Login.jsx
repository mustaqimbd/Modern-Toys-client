import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../AuthProvider/AuthProvider';
import { getAuth } from 'firebase/auth';

const Login = () => {
    const { userLogin, googleSignIn } = useContext(Context);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const auth = getAuth();
    const hanldeSingIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('successful Login')
            })
            .catch(err => setError(err.message))
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => { setSuccess('Successfully sign in') })
            .catch(e => setError(e.message))
    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded drop-shadow-2xl text-black w-full">
                        <h1 className="mb-4 text-3xl text-center">Login</h1>
                        {
                            error && <p className='text-red-700'>{error}</p>
                        }
                        {success && <p className='text-blue-700'>{success}</p>}
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
                            <div className="text-gray-700 mb-5 mt-1">
                                Do not have an account? Please
                                <Link to='/sign-up' className="no-underline border-b border-blue text-blue-600">
                                    Sign up
                                </Link>.
                            </div>
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-blue-600 hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>
                        </form>
                        <div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full text-center py-3 rounded bg-blue-600 hover:bg-green-dark focus:outline-none my-1 mt-6"
                            >Sign in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;