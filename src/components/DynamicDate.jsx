import { useEffect, useState } from 'react';

const DynamicDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);


    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        era: 'short',
        timeZone: 'Asia/Dhaka',
        calendar: 'beng',
    };
    const formattedDate = date.toLocaleDateString('bn-BD', options);

    const timeOptions = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Dhaka',
    };
    const formattedTime = date.toLocaleTimeString('bn-BD', timeOptions);

    return (
        <div className='container-fluid d-flex flex-wrap gap-1'>
            <span><i className="fas mx-1 fa-location-dot"></i> ঢাকা |</span>
            <span><i className=" fa mx-1 fa-calendar"></i>{formattedDate} |</span>
            <span> <i className=" fas mx-1 fa-clock"></i>
                {formattedTime}</span>
        </div>
    );
};

export default DynamicDate;
