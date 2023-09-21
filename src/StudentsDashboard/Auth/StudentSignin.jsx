import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { callApi } from "../../utilities/functions";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import useLoggedIn from "../../hooks/useLoggedIn";
import Loader from "../../utilities/Loader";

export default function StudentSignin() {
  useTitle("Student Signin")
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const from = location.state?.from?.pathname || "/profile";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("")
  const { authenticated, loading } = useLoggedIn();


  if (loading) {
    return <Loader />
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true)
    setError("")
    try {
      const res = await callApi("POST", "/api/login", { email, password });
      console.log(res);
      if (res.token) {
        localStorage.setItem("token", res.token);
        toast.success('Login successfully!', {
          position: toast.POSITION.TOP_RIGHT
        });
        window.location.reload()
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
  // console.log(authenticated)
  return (
    <>
      {
        !authenticated ? <div className="mt-5 pt-1">
          <div className="col-sm-12 col-md-6 mx-auto mb-5">
            <div className="login-box mt-5 mx-auto ">
              <div className="login-logo">
                <h3>রক্তদাতা লগইন</h3>
              </div>
              <div className="card">
                <div className="card-body login-card-body">
                  <p className="login-box-msg">Login in to start your session</p>
                  <form onSubmit={handleSubmit}>
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
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-12 d-flex justify-content-between gap-2">
                        <p className="text-danger mb-0"> {error}</p>

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
                    <Link to={'/signup'} className="register-button">
                      একাউন্ট তৈরি করুন
                    </Link>

                    <a className="text-nowrap text-secondary text-sm" href="#">Forgot Password</a>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> : (navigate("/profile", { replace: true })
        )
      }
    </>
  );
}
