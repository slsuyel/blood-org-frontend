import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="d-none d-md-block">
            <div className="light-moods py-2 row w-100 justify-content-between mx-auto">
                <Link className="col-md-3 " to="/">
                    <img className="img-fluid px-2" src='https://voj-suyel.netlify.app/assets/logo-6639ffd8.jpg' alt="" />
                </Link>
                <img className="col-md-7 img-fluid " src="https://backend.newsnow24.com/storage/photos/shares/Ads/website-banner.gif" alt="" />
            </div>
        </div>
    );
};

export default Logo;
