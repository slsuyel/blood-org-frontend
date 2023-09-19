/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import logo from '../../assets/image/logo.jpg'
const Footer = () => {

    return (
        <footer className="pt-5 border-top">
            <div className="container  px-4 px-md-3 ">
                <div className="row">
                    <div className="  col-lg-3 mb-3 pt-2">

                        <div>
                            <p>উপদেষ্টা সম্পাদকঃ সাবেদ উর রহমান <br />
                                সম্পাদক ও প্রকাশকঃ মোঃ মানিক বাবলু<br />
                                উপ-সম্পাদকঃ মুহাম্মদ ওসমান<br />
                                Phone: +880 1869 955 486</p>
                        </div>


                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="list-unstyled small">
                            <img src={logo} width={'230px'} alt="Logo" />
                            <p className="mb-2">
                            Voice of journalists is a leading multimedia news portal in Bangladesh. Contains not only news, new news, views, opinion, politics, entertainment, sports,
                            </p>
                        </div>
                    </div>



                    <div className="col-6 col-lg-3 mb-3">
                        <h5>Dhaka Office:</h5>
                        <p> House-555, Road-78, Block-E, <br />
                            Niketon, Gulshan-1, Dhaka-1282. <br />
                            Phone: +880 1859 195 622  <br />
                            Phone: +880 7869 913 486</p> <br />
                    </div>
                    <div className="col-6 col-lg-3 mb-4">
                        <h5>Chittagong office:</h5>
                        House-5/DA, Road-9, 9th Floor, O.R.Nizam Road R/A,  <br />
                        155 No. Bagmoniram,Panchlaish, Chattogram 4800.<br />

                        Phone: +880 1913 427 319<br />
                        Email: news@Voiceofjourna.com<br />

                    </div>
                </div>
            </div>
            <div className="position-relative">
                <a href="#top" className="gp-top" ><i className="fa-solid fa-circle-chevron-up"></i></a>
            </div>

            <div className="text-center px-4 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                "© {new Date().getFullYear()} School of excellence. All rights reserved."
            </div>
        </footer>
    );
};

export default Footer;