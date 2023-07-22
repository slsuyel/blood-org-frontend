
import { NavLink as Link } from 'react-router-dom';

export default function Sidebar() {

  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1">
        <Link to="/dashboard" className="brand-link text-decoration-none">
          <img
            src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"
            alt="Dashboard Logo"
            className="brand-image img-circle elevation-1"
          />
          <span className="brand-text font-weight-light"> Dashboard</span>
        </Link>



        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >

              <li className="nav-item">
                <Link to="/dashboard/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/dashboard/student" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Student</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/teachers" className="nav-link">
                  <i className="nav-icon fa-solid fa-chalkboard-user"></i>
                  <p>Teacher</p>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/dashboard/question" className="nav-link">
                  <i className="nav-icon fa-solid fa-file-circle-question"></i>
                  <p>Question</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/batches " className="nav-link">
                  <i className="nav-icon fa-solid fa-people-group"></i>
                  <p>Batches </p>
                </Link>
              </li>



              {/* 
              <li className="nav-item">
                <Link to="/dashboard/users" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Users</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
