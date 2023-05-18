import { Outlet } from 'react-router-dom';
import App from '../App';
import Navbar from '../SharedComponents/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;