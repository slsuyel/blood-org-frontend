
import { NavLink as Link } from 'react-router-dom';
import useOrgLoggedIn from '../hooks/useOrgLoggedIn';
import useAdminLoggedIn from '../hooks/useAdminLoggedIn';

export default function Sidebar() {
  const { orgAuthenticated, loading } = useOrgLoggedIn()
  const { adminAuthenticated, adminLoading } = useAdminLoggedIn()

  // if (loading && adminLoading) {
  //   return null
  // }


  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1" style={{ backgroundColor: '#3940A4' }}>
        <Link to="/dashboard" className="brand-link text-decoration-none py-2">
          <img
            src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"
            alt="Dashboard Logo"
            className="brand-image img-circle elevation-1"
          />
          <span className="brand-text font-weight-light">Admin Dashboard</span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >

              {
                orgAuthenticated ? <>  <li className="nav-item">
                  <Link to="/dashboard/" className="nav-link">
                    <i className="nav-icon fas fa-home"></i>
                    <p className='text-nowrap text-white'>Home</p>
                  </Link>
                </li>
{/* <i class="fa-solid fa-user"></i> */}
                <li className="nav-item">
                    <Link to="/dashboard/org-profile" className="nav-link">
                      <i className="nav-icon fa-solid fa-user"></i>
                      <p className='text-nowrap text-white'>Profile</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/add-donar" className="nav-link">
                      <i className="nav-icon fa-solid fa-user-plus"></i>
                      <p className='text-nowrap text-white'>Add Donor</p>
                    </Link>
                  </li>
                 


                  <li className="nav-item">
                    <Link to="/dashboard/manage" className="nav-link">
                      <i className="nav-icon fa-solid fa-user-pen"></i>
                      <p className='text-nowrap text-white'>Manage Donors</p>
                    </Link>
                  </li>

                  <hr className='bg-black m-0 my-2' />

                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="nav-icon fa-solid fa-house-chimney-user"></i>
                      <p className='text-nowrap text-white'> Home </p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/dashboard/org/settings" className="nav-link">
                      <i className="nav-icon fa-solid fa-gear"></i>
                      <p className='text-nowrap text-white'> Settings </p>
                    </Link>
                  </li>

                </> : adminAuthenticated ? <>

                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="nav-icon fa-solid fa-house-chimney-user"></i>
                      <p className='text-nowrap text-white'> Home </p>
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link to="/dashboard/add-donar" className="nav-link">
                      <i className="nav-icon fa-solid fa-user-plus"></i>
                      <p className='text-nowrap text-white'>Add Donor</p>
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/manage" className="nav-link">
                      <i className="nav-icon fa-solid fa-user-pen"></i>
                      <p className='text-nowrap text-white'>Manage Donors</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/donars" className="nav-link">
                      <i className="nav-icon fas fa-users"></i>
                      <p className='text-nowrap text-white'>Donors</p>
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link to="/dashboard/organizations" className="nav-link">
                      <i className="nav-icon fa-solid fa-chalkboard-user"></i>
                      <p className='text-nowrap text-white'>Add Organization</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/dashboard/manage-org" className="nav-link">
                      <i className="nav-icon fa-solid fa-people-group"></i>
                      <p className='text-nowrap text-white'>Manage Organization </p>
                    </Link>
                  </li>

                  <div>
                    <hr className='bg-black m-0 my-2' />
                  </div>


                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="nav-icon fa-solid fa-house-chimney-user"></i>
                      <p className='text-nowrap text-white'> Home </p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/dashboard/settings" className="nav-link">
                      <i className="nav-icon fa-solid fa-gear"></i>
                      <p className='text-nowrap text-white'> Settings </p>
                    </Link>
                  </li>

                </> : ''
              }


            </ul>
          </nav>
        </div>
      </aside >
    </>
  );
}
