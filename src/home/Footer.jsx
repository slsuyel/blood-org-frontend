import { useEffect } from "react";
import footer from '../assets/images/blood-footer.png'
import gogle from '../assets/images/getgle.png'
import softweb from '../assets/images/softweb.jpg'
import apple from '../assets/images/available-on-the.svg'
import { Link } from "react-router-dom";
const Footer = () => {
    // useEffect(() => {
    //     AOS.init();
    // }, []);

    return (

        <footer className="container-fluid mt-4 text-white">
            <div>
                {/* <img
                    draggable="false"
                    src={footer}

                    className="img-fluid w-100"
                /> */}
            </div>
            <div className="bg-gradient-dark">
                <div className="row ">
                    <div className="col-md-6 col-lg-4">
                        <div className="ms-3 ">
                            <div className="d-flex gap-3 my-2 mb-4">
                                <a href=""> <img src={gogle} alt="" className="rounded-3" width={'150px'} /></a>
                                <a href=""> <img src={apple} alt="" className="rounded-3" width={'150px'} /></a>
                            </div>


                            <div className="footer-social-links ms-2">
                                <a href="#" title="Facebook" target="_blank">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#" title="Twitter" target="_blank">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#" title="Google+" target="_blank">
                                    <i className="fa fa-google-plus" />
                                </a>
                                <a href="#" title="LinkedIn+" target="_blank">
                                    <i className="fa fa-linkedin" />
                                </a>
                                <a href="#" title="Dribbble" target="_blank">
                                    <i className="fa fa-dribbble" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <p className="fs-5 mb-1 ps-3 mt-2">গুরুত্বপূর্ণ লিংকঃ</p>
                        <ul className="list-unstyled importantLInk" style={{ padding: "0px 11px" }}>
                            <li>
                                <Link className="text-decoration-none text-white" to='/add-org'> <i className="me-1 fas fa-check-circle" aria-hidden="true" /> সংগঠন Add করুন </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-white" to='/org-login'> <i className="me-1 fas fa-check-circle" aria-hidden="true" /> সংগঠন লগিন করুন </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none text-white" to='/admin/signin'> <i className="me-1 fas fa-check-circle" aria-hidden="true" /> Admin </Link>
                            </li>

                            <li>
                                <a className="text-decoration-none text-white" href="http://www.panchagarh.gov.bd/" target="_blank">
                                    <i className="fas fa-check-circle" aria-hidden="true" /> &nbsp; পঞ্চগড়
                                    জেলা
                                </a>
                            </li>


                        </ul>

                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="ps-3">
                            <p className="fs-5 mb-0  mt-2">কারিগরি সহায়তায়:</p>
                            <a className="btn-light px-1 text-decoration-none" href="https://softwebsys.com/" >
                                <img src={softweb} alt="" width={'25px'} className="rounded-circle" />  সফটওয়েব সিস্টেম সল্যুশন
                            </a> <br />
                            {/* <span>টেকনিক্যাল সাপোর্টঃ ০১৭২২৫৯-৭৫৬৫</span> */}
                            <p className="mt-4 mb-0 text-secondary">কপিরাইট ©২০২৩ সর্বস্বত্ব সংরক্ষিত</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    );
};

export default Footer;