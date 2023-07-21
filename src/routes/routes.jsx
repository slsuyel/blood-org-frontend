import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import AdminRoute from "./AdminRoute";
import Blogs from "../pages/blogs";
import Users from "../pages/users";
import "../App.css";
import Students from "../pages/Students/Students";
import Question from "../pages/Question/Question";
import Batch from "../pages/Batch/Batch";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Signin />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            
        ],
    },
    {
        path: 'dashboard',
        element: <AdminRoute><WithNavbar /></AdminRoute>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'student',
                element: <Students />
            },
            {
                path: 'question',
                element: <Question />
            },
            {
                path: 'batch',
                element: <Batch />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'users',
                element: <Users />
            },
        ]
    }

]);