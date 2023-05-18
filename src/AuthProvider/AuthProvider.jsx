import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const Context = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(user);
            setUser(user);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const data = {
        user,
        createUser,
        userLogin,
        googleSignIn,
        logOut,
        loading
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;