
import { Link, useParams } from "react-router-dom";
import HeroNewsCard from "../../Home/HeroNewsCard";
import NewsCard3 from "../../Home/NewsCard3";
import SkeletonLoader from "../../components/utilities/SkeletonLoader";
import useByCategory from "../../hooks/useByCategory";
import NewsCard from "../../Home/NewsCard";
import RelatedNews from "../../Home/shared/RelatedNews";
import { baseUrl } from "../../baseurl/baseurl";

const Categories = () => {
    const { category } = useParams()

    const { newsByCategory, isLoading } = useByCategory(`${category && category}`)

    if (isLoading) {
        return <SkeletonLoader />
    }

    const first = newsByCategory[0]

    return (
        <>
            {
                newsByCategory.length > 0 ? < div className="row w-100 mx-auto mx-4">
                    <h3 className="mb-3 ms-2 my-2">{category}</h3>
                    <div className="col-md-6 position-relative">
                        <div className="img-contain">
                            <img src={`${baseUrl}${first.banner}`} alt="Zoomable Image" />
                            <div className="overlay"></div>
                        </div>

                        <div className="position-absolute title-text">
                            <span className="bg-white px-2 py-1 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                            <Link to={`/posts/${first?._id}`} className="text-decoration-none text-white ">  <h4 className="mt-3">{first?.title}</h4></Link>
                        </div>
                    </div>

                    <NewsCard3 allNews={newsByCategory} />

                    <div className="col-md-3">
                        <div className="w-100 mx-auto">
                            <a href="" className="text-center">  <img src="http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className="img-fluid rounded shadow-sm " /></a>
                        </div>
                        <NewsCard />
                    </div>
                    <HeroNewsCard allNews={newsByCategory} />

                </div >


                    : <div>
                        No data
                    </div>

            }
            <div className="mx-3">
                {first && <RelatedNews news={first} />}
            </div>
        </>
    );
};

export default Categories;