
function ErrorPage() {

    return (
        <div className='bg-white  p-5 shadow text-danger'>

            <div className="text-center">
                <img src="https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg" alt="" className="img-fluid" />
            </div>
            <h5 className='bg-danger-subtle py-3 text-center text-danger'>দুঃখিত ! কোন তথ্য পাওয়া যায়নি</h5>

            <div className="row">

                <div className="col-lg-4 pt-2">
                    <div className="media align-items-center rounded shadow p-3">
                        <i className="fa-solid fa-lock h4 mb-0 text-danger" />
                        <h6 className="ml-3 mb-0"><a href="/donar/signin" className="text-danger text-decoration-none">রক্তদাতা লগইন করুন</a></h6>
                    </div>
                </div>{/* <i class="fa-solid fa-lock"></i> */}
                <div className="col-lg-4 pt-2">
                    <div className="media align-items-center rounded shadow p-3">
                        <i className="fa fa-user h4 mb-0 text-danger" />
                        <h6 className="ml-3 mb-0"><a href="/signup" className="text-danger text-decoration-none">রক্তদাতা রেজিস্ট্রেশন করুন</a></h6>
                    </div>
                </div>
                <div className="col-lg-4 pt-2">
                    <div className="media align-items-center rounded shadow p-3">
                        <i className="text-danger fs-4 fa-solid fa-users-rays"></i>
                        <h6 className="ml-3 mb-0"><a href="/add-org" className="text-danger text-decoration-none">সংগঠন যোগ করুন</a></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
