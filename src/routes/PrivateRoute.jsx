import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(location);
    
    if(loading){
        return <LoadingPage></LoadingPage>;
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/loginPage'></Navigate>
    );
};

export default PrivateRoute;