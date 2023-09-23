import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import { toast } from 'react-toastify';
import useOrgLoggedIn from '../../hooks/useOrgLoggedIn';
import useAdminLoggedIn from '../../hooks/useAdminLoggedIn';
import Loader from '../../utilities/Loader';

const OrgSignIn = () => {
    const { orgAuthenticated, loading } = useOrgLoggedIn()
    const { adminAuthenticated, adminLoading } = useAdminLoggedIn()
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        setIsSubmitting(true)
        e.preventDefault();
        setError('')
        try {
            const res = await callApi("POST", "/api/organization/login", { email, password });
            if (res.token) {
                localStorage.setItem("token", res.token);
                toast.success('Login successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate(from, { replace: true });
            } else {
                console.log('Login failed: Token missing in the response.');
                setError("Login failed")
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            setError("Login failed")
        }
        finally {
            setIsSubmitting(false);

        }

    };


    if (loading || adminLoading) {
        return <Loader />
    }


    return (
        <div>
            {adminAuthenticated || orgAuthenticated ? (
                navigate("/dashboard", { replace: true })
            ) : (


                <div className="pt-5">
                    <div className="login-box mt-5 mx-auto">
                        <div className="login-logo ">
                            <h3>রক্তদাতা সংগঠন লগইন</h3>
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                {/* <p className="login-box-msg">সংগঠন র</p> */}
                                <form>
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span
                                                    className=""
                                                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {showPassword ? (
                                                        <i className="fa-solid fa-lock-open"></i>
                                                    ) : (
                                                        <i className="fa-solid fa-lock"></i>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between gap-2">
                                            <p className="text-danger mb-0">{error}</p>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Loading...' : 'লগইন'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="d-flex align-items-center gap-3 justify-content-between mt-2">
                                    <Link to={'/add-org'} className="register-button">
                                        একাউন্ট তৈরি করুন
                                    </Link>

                                    <a className="text-nowrap text-secondary text-sm" href="#">Forgot Password</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}
export default OrgSignIn;
