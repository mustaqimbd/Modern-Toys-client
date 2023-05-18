import { Outlet } from 'react-router-dom';

import Navbar from '../SharedComponents/Navbar';
import Footer from '../SharedComponents/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;