import { Link } from "react-router-dom";
import NewsCard3 from "./NewsCard3";
import HeroNewsCard from "./HeroNewsCard";

const BlogHero = () => {

    return (
        <>
            <div className="row w-100 mx-auto mx-4">
                <div className="col-md-6 position-relative">
                    <Link to={`f`}>  <div className="img-contain">
                        <img src='https://newsnow-server.vercel.app/uploaded-images/1693247943329-prothomalo-bangla_2023-08_1cadac3a-afe3-4dde-9b41-0a328e900cdb_27082023_cm_1.webp' alt="Zoomable Image" />
                        <div className="overlay"></div>
                    </div></Link>



                    <div className="position-absolute title-text">
                        <span className="bg-white px-2 py-1 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                        <Link to={`/posts/`} className="text-decoration-none text-white ">  <h4 className="mt-3">কনটেইনার টার্মিনাল নির্মাণে মার্সকের প্রস্তাব বিবেচনা করবে সরকার</h4></Link>
                    </div>
                </div>

                <NewsCard3 />

                <div className="col-md-3">
                    <div className="w-100 mx-auto">
                        <a href="" className="text-center">
                            <img src="http://alokitotetulia.com/public/WhatsApp%20Image%202023-01-10%20at%201.09.03%20AM.jpeg" alt=""  height={'400px'} />
                        </a>
                    </div>

                </div>

            </div>
            <hr />
            <HeroNewsCard />
        </>
    );
};

export default BlogHero;