/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log(user);
    const token = localStorage.getItem('token')

    if (token) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;