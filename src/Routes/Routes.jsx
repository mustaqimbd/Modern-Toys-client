import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddToy from "../Pages/AddToy";
import Mytoys from "../Pages/Mytoys";
import DetailsPage from "../Pages/DetailsPage";
import AllToys from "../Pages/AllToys";
import PriveteRoute from "./PriveteRoute";


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
                element: <PriveteRoute><DetailsPage /></PriveteRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('http://localhost:5000/all-toys/')
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