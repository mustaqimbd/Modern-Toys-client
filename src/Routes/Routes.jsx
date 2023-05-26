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
import Blogs from "../Pages/Blogs";
import ErrorHandlePage from "../Pages/ErrorHandlePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        // errorElement: <ErrorHandlePage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://modern-toys-server.vercel.app/all-toys/')
            },
            {
                path: '/toy/:id',
                element: <PriveteRoute><DetailsPage /></PriveteRoute>,
                loader: ({ params }) => fetch(`https://modern-toys-server.vercel.app/toy/${params.id}`)
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('https://modern-toys-server.vercel.app/all-toys/')
            },
            {
                path: '/my-toys',
                element: <PriveteRoute> <Mytoys /></PriveteRoute>
            },
            {
                path: '/add-toy',
                element: <PriveteRoute><AddToy /></PriveteRoute>
            },
            {
                path: '/blogs',
                element: <Blogs />
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