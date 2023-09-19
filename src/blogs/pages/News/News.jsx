import { useParams } from "react-router-dom";
import NewsCard from "../../Home/NewsCard";
import NewsMidCard from "../../Home/NewsMidCard";
import RelatedNews from "../../Home/shared/RelatedNews";
import Sidebar1 from "../../Home/sidebars/Sidebar1";
import SocialShare from "../../components/SocialShare";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonLoader from "../../components/utilities/SkeletonLoader";
import { baseUrl } from "../../baseurl/baseurl";

const News = () => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0,0);
     }, [])
     
    useEffect(() => {
        setLoading(true);  // Set loading to true initially
        fetch(`${baseUrl}/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);  // Set loading to false after data is fetched
            })
    }, [id])


    return (
        <>
            {
                loading ? <SkeletonLoader /> : <> <div className="w-100 mx-auto container-fluid">
                    <div className="container-fluid my-2 border-bottom border-2">
                        <p className="mb-0 category-tittle fs-6">
                            {news?.selectedCategoryValues && news.selectedCategoryValues.length > 0
                                ? news.selectedCategoryValues.map((item, index) => (
                                    <span key={index}>
                                        {item}
                                        {index !== news.selectedCategoryValues.length - 1 ? ',' : ''}
                                    </span>
                                ))
                                : null}
                        </p>
                        <h2 className="fs-2 my-2">{news?.title} </h2>
                        <div className="align-items-center d-flex flex-wrap justify-content-between mb-3">
                            <p className="mb-0">প্রকাশ: {new Date(news.date).toLocaleString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}, {new Date(news.date).toLocaleTimeString('bn-BD', { hour: 'numeric', minute: 'numeric', hour12: false })}</p>


                            <SocialShare />
                        </div>
                    </div>

                    <div className="mx-auto row w-100 my-4">
                        <div className="col-md-8 col-sm-12 col-xl-8">
                            <img src={`${baseUrl}${news.banner}`} alt="" className="img-fluid rounded-1 w-100" style={{maxHeight :'400px'}} />
                            <div>
                                <p className="my-3">
                                    <div className='border lh-base mb-2 p-2 rounded-1 shadow-sm text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                                ${news?.author}:</span>${news?.content}</p>`
                                        }}
                                    />
                                </p>
                            </div>


                        </div>

                        <div className="col-sm-12 col-md-4 col-xl-4">
                            <Sidebar1 />
                            <NewsCard />
                            <NewsCard />
                            <NewsMidCard />
                        </div>

                    </div>

                    <div className="col-12">
                        <RelatedNews news={news} />
                    </div>

                </div></>
            }
        </>
    );
};

export default News;