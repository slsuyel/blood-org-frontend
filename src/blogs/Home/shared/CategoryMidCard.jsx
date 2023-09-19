
import { Link } from "react-router-dom";
import NewsMidCard from "../NewsMidCard";

const CategoryMidCard = ({ header, Sidebar }) => {

    return (
        <div className="mx-4">
            <div className='align-items-end border-2 border-bottom border-secondary-subtle d-flex justify-content-between mt-2 pb-3'>

                <div className="circle-with-text mt-3" style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}>
                    <div className="red-circle" />
                    <h2 className=" fw-bold mb-0 opacity-75 pb-2 text-primary">{header}</h2>
                </div>

                <div>
                    <Link to={`/news`} className='onhover text-decoration-none'>আরও দেখুন <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>

            <div className='row mx-auto w-100 my-5'>

                <div className='col-md-3'>
                    <NewsMidCard />
                    <NewsMidCard />
                </div>

                <div className="col-md-6">
                    <div className="mb-2 newscard shadow-sm rounded-1">
                        <img src='https://newsnow-server.vercel.app/uploaded-images/1693247943329-prothomalo-bangla_2023-08_1cadac3a-afe3-4dde-9b41-0a328e900cdb_27082023_cm_1.webp' alt="" className='img-fluid rounded ms-2' />

                        <div className='lh-base ms-2 mt-3 text-start'>

                            <span className="bg-white my-3 rounded text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>

                            <Link to={`/posts`} className="text-decoration-none text-dark ">
                                <h6 className="fs-4 lh-base">
                                    প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষ চট্টগ্রামের লালদিয়ায়
                                </h6>
                            </Link>

                            <div style={{ height: 245, overflow: "auto" }} className='border lh-base mb-2 p-2 rounded-1 shadow-sm text-secondary'  >

                                প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশের সংশ্লিষ্ট কর্তৃপক্ষ চট্টগ্রামের লালদিয়ায় একটি নতুন কনটেইনার টার্মিনাল নির্মাণ ও পরিচালনার জন্য ডেনিশ শিপিং এবং লজিস্টিক জায়ান্ট মার্সক গ্রুপের প্রস্তাব বিবেচনা করবে।
                            </div>

                        </div>
                    </div>

                </div>



                <div className='col-md-3'>
                    {Sidebar && <Sidebar />}

                </div>
            </div>

            <div className='row mx-auto w-100 my-5'>
                <div className="col-md-3">
                    <NewsMidCard />
                </div>
                <div className="col-md-3">
                    <NewsMidCard />
                </div>
                <div className="col-md-3">
                    <NewsMidCard />
                </div>
                <div className="col-md-3">
                    <NewsMidCard />
                </div>
            </div>

        </div>
    );
};

export default CategoryMidCard;