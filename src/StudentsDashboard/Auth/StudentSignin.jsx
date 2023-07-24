import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { callApi } from "../../utilities/functions";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

export default function StudentSignin() {
  useTitle("Student Signin")
  const navigate = useNavigate();
  const location = useLocation();
  const [founder_email, setFounder_email] = useState('');
  const [password, setPassword] = useState('');
  const from = location.state?.from?.pathname || "/studentdashboard";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    setIsSubmitting(true)
    setError("")
    event.preventDefault();
    try {
      const res = await callApi("POST", "/api/student/login", { founder_email, password });
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

  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <h3>Student Login</h3>
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
                    value={founder_email}
                    onChange={(e) => setFounder_email(e.target.value)}
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
                  <div className="col-8">
                  </div>
                  <div className="col-4">
                    <p className="text-danger"> {error}</p>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Loading...' : 'Sign In'}
                    </button>
                  </div>
                </div>
              </form>
              <p className="mb-0 mt-2">
                <Link to={'/signup'} className="text-center text-decoration-none">
                  Register a new account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
