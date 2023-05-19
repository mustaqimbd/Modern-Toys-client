import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddToy from "../Pages/AddToy";
import Mytoys from "../Pages/Mytoys";
import DetailsPage from "../Pages/DetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/toy/:id',
                element: <DetailsPage />,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: '/my-toys',
                element: <Mytoys />
            },
            {
                path: '/add-toy',
                element: <AddToy />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            }
        ]
    }
])
export default router;