
import React, { createContext, useState, useEffect } from "react";
import { callApi } from "../utilities/functions";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const checkUserAuthentication = async () => {
            if (!token) {
                setIsLoggedIn(false);
                return;
            }
            try {
                const response = await callApi("POST", "/api/check/student/login", { token });
                if (response.message === "Token is valid") {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        checkUserAuthentication();
    }, [token]);

    const studentLogOut =async () => {
        const res = await callApi("POST", '/api/student/logout')
        console.log(res);
        localStorage.removeItem("token")
        localStorage.removeItem("studentId")
        window.location.reload()
    }


    const authInfo = {
        isLoggedIn, studentLogOut
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
