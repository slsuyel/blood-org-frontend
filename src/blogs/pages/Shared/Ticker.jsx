/* eslint-disable react/no-unknown-property */

import { Link } from 'react-router-dom';
import useLatestNews from '../../hooks/useLatestNews';

const Ticker = () => {

    const { newsData, } = useLatestNews();



    return (
        <div className="light-moods-ticker container-fluid my-3">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="d-flex justify-content-between align-items-center breaking-news"

                    >
                        <div
                            className="d-flex flex-row flex-grow-1 flex-fill justify-content-center   text-white px-1 news"
                        >
                            <span className="d-flex text-nowrap align-items-center" style={{ backgroundColor: "#be202e" }}>&nbsp;সংবাদ শিরোনাম : </span>
                            <div className='arrow'></div>
                        </div>
                        <marquee
                            behavior="scroll"
                            direction="left"
                        >
                            {
                                newsData?.map(blog => (
                                    <Link key={blog._id} to={`/posts/${blog._id}`} className='text-decoration-none  onhover'>
                                        {blog?.title}
                                        <svg className='mx-2 mb-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <circle cx="10" cy="10" r="9" fill="red" />
                                        </svg>

                                    </Link>
                                ))
                            }
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;
