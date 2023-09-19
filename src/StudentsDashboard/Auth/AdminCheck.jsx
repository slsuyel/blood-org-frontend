import { Navigate } from "react-router-dom";
import Loader from "../../utilities/Loader";
import useAdminLoggedIn from "../../hooks/useAdminLoggedIn";

const AdminCheck = ({ children }) => {
    const { adminAuthenticated, adminLoading } = useAdminLoggedIn()

    if (adminLoading) {
        return <Loader />;
    }

    return adminAuthenticated ? children : <Navigate to="/admin/signin" />;
};

export default AdminCheck;
