import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import LoadingPage from './pages/LoadingPage';

const MainLayout = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <LoadingPage></LoadingPage>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;