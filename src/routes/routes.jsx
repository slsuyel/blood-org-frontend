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
import ErrorPage from "../components/ErrorPage";
import EditStudent from "../pages/Students/EditStudent";
import StudentShow from "../pages/Students/StudentShow";
import UserCheck from "./UserCheck";
import Teacher from "../pages/Teacher/Teacher";
import Batches from "../pages/Batches/Batches";
import AddQuestions from "../pages/Question/AddQuestions";
import StudentsDashboard from "../StudentsDashboard/StudentsDashboard";
import Exam from "../StudentsDashboard/Exam";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/studentdashboard",
                element: <PrivateRoute><StudentsDashboard /></PrivateRoute>,
            },
            {
                path: "/studentdashboard/exam",
                element: <PrivateRoute><Exam /></PrivateRoute>,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><UserCheck><WithNavbar /></UserCheck></PrivateRoute>,
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
                path: 'student/edit/:id',
                element: <EditStudent />
            },
            {
                path: 'student/show/:id',
                element: <StudentShow />
            },
            {
                path: 'question',
                element: <Question />
            },
            {
                path: 'question/add',
                element: <AddQuestions />
            },
            {
                path: 'teachers',
                element: <Teacher />
            },
            {
                path: 'batches',
                element: <Batches />
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