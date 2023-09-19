import { Navigate } from "react-router-dom";

import useAdminLoggedIn from "../hooks/useAdminLoggedIn";
import Loader from "../utilities/Loader";
import useOrgLoggedIn from "../hooks/useOrgLoggedIn";

const PrivateRoute = ({ children }) => {
    const { orgAuthenticated, loading } = useOrgLoggedIn()
    const { adminAuthenticated, adminLoading } = useAdminLoggedIn()

    if (loading || adminLoading) {
        return <Loader />;
    }
    return orgAuthenticated || adminAuthenticated ? children : <Navigate to="/org-login" />;
};

export default PrivateRoute;


