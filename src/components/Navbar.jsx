import React from "react";
import bar from "../assets/clock-time.gif"
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate('/signin')
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item mb-3">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <img src={bar} alt="" width={'50px'} />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fas fa-user-circle fa-lg fs-3"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <span className="dropdown-item">Hello, Suyel Haque</span>
            <span className="dropdown-item">Admin</span>
            <Button onClick={handleLogOut} className="dropdown-item">
              <i className="fas fa-sign-out-alt mr-2"></i> Log out
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

