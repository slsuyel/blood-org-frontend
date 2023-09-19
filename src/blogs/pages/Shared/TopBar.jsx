import { useState } from "react";
import '../../Blog.css'
import DynamicDate from "../../../components/DynamicDate";

const TopBar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };


    return (
        <div className="mx-auto pt-2">
            <div className="d-md-block d-none d-sm-none mt-5 pri-bg pt-2 py-1 text-white">
                <div className=" container d-flex justify-content-between align-items-center">
                    <div>
                        <DynamicDate />
                    </div>
                    <div className="d-flex flex-wrap gap-3 align-items-center">
                        <div className="text-nowrap">
                            <select className="form-select py-0 bg-2nd">
                                <option value="" disabled defaultValue>Select a language</option>
                                <option value="en">English</option>
                                <option value="bn">Bangla</option>
                                <option value="fr">French</option>
                            </select>
                        </div>

                        <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                            <button
                                className="bg-2nd border-0 dropdown-toggle  px-2 rounded-circle"
                                id="dropdown-search"
                                onClick={handleDropdownToggle}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                            <div className={`dropdown-menu p-0 rounded-3 rounded-end-5 search-btn  ${isDropdownOpen ? 'show' : ''}`}>
                                <form className="d-flex">
                                    <input type="search" placeholder="খুঁজুন" aria-label="Search" className="form-control border-0 bg-2nd " />

                                    <button type="submit" className="bg-red border-0 rounded-end-4 px-2"><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
