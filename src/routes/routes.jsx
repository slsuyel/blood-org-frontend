import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
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
import TeacherShow from "../pages/Teacher/TeacherShow";
import TeacherEdit from "../pages/Teacher/TeacherEdit";
import StudentSignin from "../StudentsDashboard/Auth/StudentSignin";
import StudentCheck from "../StudentsDashboard/Auth/StudentCheck";
import HomePage from "../home/HomePage";
import Services from "../home/Services";
import AboutUs from "../home/AboutUs";
import Profile from "../StudentsDashboard/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: "/student/signin",
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
                path: "/profile",
                element: <StudentCheck><Profile /></StudentCheck>,
            },
            {
                path: "/profile/exam",
                element: <StudentCheck><Exam /></StudentCheck>,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <UserCheck><WithNavbar /></UserCheck>,
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
                path: 'teacher/show/:id',
                element: <TeacherShow />
            },
            {
                path: 'teacher/edit/:id',
                element: <TeacherEdit />
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