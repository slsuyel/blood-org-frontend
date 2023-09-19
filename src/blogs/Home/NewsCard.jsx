import { Link } from "react-router-dom";

const NewsCard = () => {
    return (

        <div style={{ marginBottom: '2px' }} className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1 ">
            <div>
                <img src="https://backend.newsnow24.com/storage/photos/shares/news/2023/08/18/file_1692370317.jpg" alt="" className="img-fluid mb-1" width={'180px'} />
                <span className="ms-2 text-danger text-nowrap text-sm"> <i className="fa-solid fa-clock"></i> ২ ঘন্টা আগে</span>
            </div>

            <div>
                <p className="mb-0 category-tittle"> জাতীয়, প্রিয় চট্টগ্রাম </p>
                <Link to={`/news`} className="text-decoration-none text-dark ">
                    <h6 className="fw-normal lh-base mb-3">করোনাভাইরাসের নতুন ও উচ্চ সংক্রমণশীল ধরন শনাক্ত</h6>
                </Link>

            </div>

        </div>
    );
};

export default NewsCard;