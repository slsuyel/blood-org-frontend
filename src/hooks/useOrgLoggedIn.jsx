import { useState, useEffect } from "react";
import { callApi } from "../utilities/functions";

const useOrgLoggedIn = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkOrgAuthentication = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const response = await callApi("POST", "/api/organization/check/login", { token });
                // console.log(response);
                if (response.message === "Token is valid") {
                    console.log({ response });
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
            }
            setLoading(false);
        };

        checkOrgAuthentication();
    }, []);

    return { orgAuthenticated: authenticated, loading };
};

export default useOrgLoggedIn;
