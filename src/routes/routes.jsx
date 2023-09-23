import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import "../App.css";
import Students from "../pages/Students/Students";
import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import Teacher from "../pages/Teacher/Teacher";
import Batches from "../pages/Batches/Batches";
import TeacherShow from "../pages/Teacher/TeacherShow";
import TeacherEdit from "../pages/Teacher/TeacherEdit";
import StudentSignin from "../StudentsDashboard/Auth/StudentSignin";
import StudentCheck from "../StudentsDashboard/Auth/StudentCheck";
import HomePage from "../home/HomePage";
import Services from "../home/Services";
import AboutUs from "../home/AboutUs";
import Profile from "../StudentsDashboard/Profile";
import DonarProfile from "../pages/Bloods/DonarProfile";
import OrgSignIn from "../StudentsDashboard/Auth/OrgSignIn";
import OrgRegi from "../StudentsDashboard/Auth/OrgRegi";
import Organizations from "../home/Organizations";
import AddUser from "../pages/subAdmin/AddUser";
import ManageUsers from "../pages/subAdmin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminCheck from "../StudentsDashboard/Auth/AdminCheck";
import BlogLayout from "../layouts/BlogLayout";
import BlogHome from "../blogs/Home/BlogHome";
import ScrollToTop from "../components/ScrollToTop";
import OrgSetting from "../pages/Organizations/OrgSetting";
import SingleOrg from "../pages/Organizations/SingleOrg";
import SearchBlood from "../pages/Bloods/SearchBlood";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ScrollToTop><WithOutnavbar /></ScrollToTop>,
        errorElement: <ErrorPage />,
        children: [
            {

                path: "/",
                element: <HomePage />,
            },

            {
                path: 'all-donars',
                element: <Services />
            },
            {

                path: '/donar/:id',
                element: <DonarProfile />
            },
            {

                path: 'about',
                element: <AboutUs />
            },
            {

                path: "/donar/signin",
                element: <StudentSignin />,
            },
            {

                path: "/admin/signin",
                element: <Signin />,
            },
            {

                path: "/signup",
                element: <Signup />,
            },
            {

                path: "organizations",
                element: <Organizations />,
            },
            // {

            //     path: "org/details/:id",
            //     element: <SingleOrg />,
            // },
            {

                path: "org-login",
                element: <OrgSignIn />,
            },
            {

                path: "/add-org",
                element: <OrgRegi />,
            },

            {

                path: "/profile",
                element: <StudentCheck><Profile /></StudentCheck>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <WithNavbar /></PrivateRoute>,
        children: [
            {

                path: '',
                element: <PrivateRoute> <Home /></PrivateRoute>
            },

            {
                path: 'org-profile',
                element: <PrivateRoute> <SingleOrg /></PrivateRoute>
            },
            {
                path: 'donars',
                element: <PrivateRoute> <Students /></PrivateRoute>
            },
            {

                path: '/dashboard/add-donar',
                element: <PrivateRoute> <AddUser /></PrivateRoute>
            },
            {

                path: '/dashboard/manage',
                element: <PrivateRoute> <ManageUsers /></PrivateRoute>
            },
            {

                path: 'donar/edit/:id',
                element: <PrivateRoute> <EditStudent /></PrivateRoute>
            },
            {

                path: 'donar/show/:id',
                element: <StudentShow />
            },

            {

                path: 'organizations',
                element: <AdminCheck> <Teacher /></AdminCheck>
            },
            {

                path: 'manage-org',
                element: <AdminCheck>  <Teacher /></AdminCheck>
            },
            {

                path: 'org/settings',
                element: <PrivateRoute><OrgSetting /></PrivateRoute>
            },
            {

                path: 'settings',
                element: <AdminCheck>  <Teacher /></AdminCheck>
            },
            {

                path: 'organization/show/:id',
                element: <AdminCheck>  <TeacherShow /></AdminCheck>
            },
            {

                path: 'organization/edit/:id',
                element: <AdminCheck>  <TeacherEdit />  </AdminCheck>
            },

        ]
    },
    {
        path: 'blogs',
        element: <ScrollToTop><BlogLayout /></ScrollToTop>,
        children: [
            {

                path: '',
                element: <BlogHome />
            },

        ]
    }
]);