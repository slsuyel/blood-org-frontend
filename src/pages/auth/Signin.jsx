import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { callApi } from "../../utilities/functions";
import { toast } from "react-toastify";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const from = location.state?.from?.pathname || "/dashboard";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    setIsSubmitting(true)
    setError("")
    event.preventDefault();
    try {
      const res = await callApi("POST", "/api/login", { email, password });
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
            <h3>Admin Login</h3>
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
