import { Outlet } from 'react-router-dom';
import Navbar from './Routes/Components/navbar';
function Provider() {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
}

export default Provider;