import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const Context = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const data = {
        auth,
        createUser
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;