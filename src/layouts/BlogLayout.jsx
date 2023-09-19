import { Outlet } from "react-router-dom";
import BlogHeader from "../blogs/pages/Shared/Header";
import Logo from "../blogs/pages/Shared/Logo";
import TopBar from "../blogs/pages/Shared/TopBar";
import Header from "../components/Header";
import Footer from "../home/Footer";



export default function BlogLayout() {
    return (
        <>
            <Header />
            <TopBar />
            <Logo />
            <BlogHeader />
            {/*    <Ticker />*/}
            <Outlet />
            <Footer />
        </>
    )
}
