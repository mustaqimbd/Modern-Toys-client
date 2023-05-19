import { Outlet } from 'react-router-dom';

import Navbar from '../SharedComponents/Navbar';
import Footer from '../SharedComponents/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-385px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;