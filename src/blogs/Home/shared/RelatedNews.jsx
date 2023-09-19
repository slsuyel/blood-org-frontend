/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SkeletonLoader from "../../components/utilities/SkeletonLoader";
import useByCategory from "../../hooks/useByCategory";
import { baseUrl } from "../../baseurl/baseurl";

const RelatedNews = ({ news }) => {

    const { newsByCategory, isLoading } = useByCategory(`${news.selectedCategoryValues[0]}`)

    if (isLoading || !news.selectedCategoryValues[0]) {
        return <SkeletonLoader />
    }
    console.log(newsByCategory);

    return (
        <div className="my-5">
            <div className="circle-with-text mt-3" style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}><div className="red-circle" /><h2 className=" fw-bold mb-0 opacity-75 pb-2 text-primary">{news.selectedCategoryValues[0]} থেকে আরও দেখুন</h2></div>

            <div className="row w-100 mx-auto my-5">

                {
                    newsByCategory.map(category => <div key={category._id} style={{ marginBottom: '2px' }} className=" my-1  col-sm-12 col-md-3 px-2 rounded-1">
                        <div className="newscard h-100 border-2 border-bottom border-danger">
                            <img src={`${baseUrl}${category.banner}`} alt="" style={{ height: '180px' }} className="img-fluid mb-1 w-100 rounded" />

                            <div className="mt-2">
                                <span className="text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> 8 ঘন্টা আগে</span>
                                <Link to={`/posts/${category._id}`} className="text-decoration-none text-dark ">
                                    <h6 className="fw-normal lh-base mb-3">{category.title}</h6>
                                </Link>

                                <div style={{ fontSize: '12px' }} className='lh-base text-secondary'
                                    dangerouslySetInnerHTML={{
                                        __html: `<p>${category?.content.slice(0, 260)} . . . .</p>`
                                    }}
                                />

                            </div>
                        </div>
                    </div>)
                }

            </div>


        </div>
    );
};

export default RelatedNews