import React, { useEffect, useState } from 'react';
// import img from '../assets/images/orggg.jpg'
import orgDemo from '../assets/images/orgs/org-demo.jpg'
import { Link, useLocation } from 'react-router-dom';
import Paginate from '../components/Paginate';
import { callApi } from '../utilities/functions';
import Loader from '../utilities/Loader';
import useTitle from '../hooks/useTitle';



const Organizations = () => {
    useTitle('রক্তদাতা সংগঠনের তালিকা')

    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [per_page, setPer_page] = useState()
    const [totalitems, setTotalitems] = useState()
    const location = useLocation();
    const [allOrgs, setAllOrgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1
            const data = await callApi("get", `/api/organizations/lists?page=${page}`);

            setAllOrgs(data.organizations.data);
            setTotalPages(data.links);
            setPer_page(data.per_page);
            setTotalitems(data.total);

            if (page === 1) {
                setPageNo(1);
            } else {
                setPageNo((page - 1) * data.per_page + 1);
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto w-100 mt-5 pt-5'>
            <div className='row'>
                {allOrgs?.map((org, index) => (
                    <Link to={`/org/details/${org.id}`} className=" col-md-4 mb-5 text-decoration-none" key={org.id}>
                        <div className="card bggg" >

                            <div className='text-center'>
                                <img src={org.logo ? org.logo : orgDemo} alt=""
                                    height={'130px'} className=" mx-auto mb-2" />
                            </div>
                            <div className=' text-center' style={{ marginBottom: '125px' }}>
                                <h4 className=' text-center'>{org.name}</h4>
                                <h5 className="fs-6 mb-0 text-secondary">
                                    <i className="fa-solid fa-location-dot me-2"></i>   {org.union}, {org.thana}, {org.district}</h5>
                                <a className="my-1 text-decoration-none" href={`tel:${org.mobile}`}>
                                    {org.mobile}
                                </a>
                            </div>



                        </div>
                    </Link>
                ))}
            </div>

            <Paginate
                Totalpageprops={totalPages}
                per_page={per_page}
                totalitems={totalitems}
                route='/dashboard/student'
            />

        </div>
    );
};

export default Organizations;