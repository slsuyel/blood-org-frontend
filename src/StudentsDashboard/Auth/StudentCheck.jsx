import { Navigate } from "react-router-dom";
import Loader from "../../utilities/Loader";
import useLoggedIn from "../../hooks/useLoggedIn";

const StudentCheck = ({ children }) => {
  const { authenticated, loading } = useLoggedIn();

  if (loading) {
    return <Loader />;
  }

  return authenticated ? children : <Navigate to="/student/signin" />;
};

export default StudentCheck;
