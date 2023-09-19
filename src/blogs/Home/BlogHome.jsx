import BlogHero from "./BlogHero";
import CategoryMidCard from "./shared/CategoryMidCard";
import TopMenu from "./shared/TopMenu";
import MyAreaNews from "./sidebars/MyAreaNews";
import Sidebar1 from "./sidebars/Sidebar1";

const BlogHome = () => {


    return (
        <div className="mt-5">
            <BlogHero />
            <TopMenu header={'সর্বশেষ'} Sidebar={Sidebar1} />
            <hr />

            <CategoryMidCard header={'বাংলাদেশ'} Sidebar={MyAreaNews}/>

            <TopMenu header={'আন্তর্জাতিক'}  />



            {/* 
            <TopMenu header={'জাতীয়'} newsData={national} isLoading={nationalLoading} />
            <CategoryMidCard category={politics} isLoading={politicsLoading} header={'রাজনীতি'} /> */}
        </div>
    );
};

export default BlogHome;
