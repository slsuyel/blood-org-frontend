import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { callApi } from "../utilities/functions";
import Loader from "../utilities/Loader";
const UserCheck = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkUserAuthentication = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const response = await callApi("POST", "/api/check/login", { token });
               console.log(response);
                if (response.message == 'Token is valid') {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
            }
            setLoading(false);
        };

        checkUserAuthentication();
    }, []);

    if (loading) {
        return <Loader />;
    }
    return authenticated ? children : <Navigate to="/student/signin" />;
};

export default UserCheck;
