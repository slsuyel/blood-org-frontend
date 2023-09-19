/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard3 = () => {



    return (
        <div className="col-md-3">
            <div style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
                <div>
                    <img src='https://newsnow-server.vercel.app/uploaded-images/1693247943329-prothomalo-bangla_2023-08_1cadac3a-afe3-4dde-9b41-0a328e900cdb_27082023_cm_1.webp' alt="" className="img-fluid mb-1" width={'180px'} />
                    <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                </div>

                <div>
                    {/* <p className="mb-0 category-tittle">
                    {newsItem.selectedCategoryValues && newsItem.selectedCategoryValues.length > 0
                        ? newsItem.selectedCategoryValues.map((item, index) => (
                            <span key={index}>
                                {item}
                                {index !== newsItem.selectedCategoryValues.length - 1 ? ',' : ''}
                            </span>
                        ))
                        : null}
                </p> */}
                    <Link to={`/posts`} className="text-decoration-none text-dark ">
                        <h6 className="fw-normal lh-base mb-3">
                            প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষ চট্টগ্রামের লালদিয়ায়

                        </h6>
                    </Link>
                </div>
            </div>
            <div style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
                <div>
                    <img src='https://newsnow-server.vercel.app/uploaded-images/1693247943329-prothomalo-bangla_2023-08_1cadac3a-afe3-4dde-9b41-0a328e900cdb_27082023_cm_1.webp' alt="" className="img-fluid mb-1" width={'180px'} />
                    <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                </div>

                <div>
                    {/* <p className="mb-0 category-tittle">
                    {newsItem.selectedCategoryValues && newsItem.selectedCategoryValues.length > 0
                        ? newsItem.selectedCategoryValues.map((item, index) => (
                            <span key={index}>
                                {item}
                                {index !== newsItem.selectedCategoryValues.length - 1 ? ',' : ''}
                            </span>
                        ))
                        : null}
                </p> */}
                    <Link to={`/posts`} className="text-decoration-none text-dark ">
                        <h6 className="fw-normal lh-base mb-3">
                            প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষ চট্টগ্রামের লালদিয়ায়

                        </h6>
                    </Link>
                </div>
            </div>
            <div style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
                <div>
                    <img src='https://newsnow-server.vercel.app/uploaded-images/1693247943329-prothomalo-bangla_2023-08_1cadac3a-afe3-4dde-9b41-0a328e900cdb_27082023_cm_1.webp' alt="" className="img-fluid mb-1" width={'180px'} />
                    <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
                </div>

                <div>
                    {/* <p className="mb-0 category-tittle">
                    {newsItem.selectedCategoryValues && newsItem.selectedCategoryValues.length > 0
                        ? newsItem.selectedCategoryValues.map((item, index) => (
                            <span key={index}>
                                {item}
                                {index !== newsItem.selectedCategoryValues.length - 1 ? ',' : ''}
                            </span>
                        ))
                        : null}
                </p> */}
                    <Link to={`/posts`} className="text-decoration-none text-dark ">
                        <h6 className="fw-normal lh-base mb-3">
                            প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষ চট্টগ্রামের লালদিয়ায়

                        </h6>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard3;
