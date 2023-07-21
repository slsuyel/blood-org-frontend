
import { Navigate, useLocation } from "react-router";

const TeacherRoute = ({ children }) => {
    const user = true;
    const userRole = "admin"

    if (user && userRole === 'teacher') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};


export default TeacherRoute;