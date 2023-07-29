import React, { useEffect } from 'react';
import SimpleSlider from '../../components/SimpleSlider';

const Feedback = () => {
    const data = [
        {
            role: 'Chairman',
            image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            name: 'Bessie Cooper',
            description: 'Strategic planning, team collaboration, and promoting employee growth.',
        },
        {
            role: 'Manager',
            image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            name: 'Alice Johnson',
            description: 'Empowering her team, problem-solving, and fostering a positive work environment.',
        },
        {
            role: 'Manager',
            image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: 'Michael Williams',
            description: 'Data analysis, process optimization, and achieving project milestones.',
        },
        {
            role: 'Manager',
            image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: 'Emily Brown',
            description: 'Innovative solutions, cross-functional communication, and mentoring team members.',
        },
        {
            role: 'Team Lead',
            image: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: 'Daniel Lee',
            description: 'Leading by example, continuous learning, and building high-performing teams.',
        },
        {
            role: 'Team Lead',
            image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=",
            name: 'Sophia Martinez',
            description: 'Creativity in problem-solving, motivating team members, and driving project success.',
        },
        {
            role: 'Developer',
            image: "https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.webp?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM=",
            name: 'David Johnson',
            description: 'Coding challenges, experimenting with new technologies, and building user-friendly applications.',
        },
        {
            role: 'Developer',
            image: "https://media.istockphoto.com/id/1465787743/photo/successful-mature-asian-working-inside-office-using-laptop-man-typing-on-keyboard-and-smiling.webp?b=1&s=170667a&w=0&k=20&c=iQhROKF7voABjsGwS52psTDE_TewDk1RIqnNnZO2z0A=",
            name: 'Emma Wilson',
            description: 'Frontend development, UI/UX design, and creating visually appealing interfaces.',
        },
        {
            role: 'Designer',
            image: "https://media.istockphoto.com/id/1438224442/photo/portrait-of-mid-adult-man-during-a-group-therapy-at-mental-health-center.webp?b=1&s=170667a&w=0&k=20&c=nzDYfPJQri224Q_ecWhz1H3QC6-Npc81QXbaWnoQjbo=",
            name: 'Oliver Thompson',
            description: 'Design thinking, visual storytelling, and crafting memorable brand experiences.',
        },
        {
            role: 'Designer',
            image: "https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.webp?b=1&s=170667a&w=0&k=20&c=3jwddQH5X_5-1o3hCkZnI1zRyVRIgJXuwT0QqQOf2lM=",
            name: 'Ava Davis',
            description: 'Illustration, typography, and exploring the latest design trends.',
        },

    ];
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div data-aos="zoom-in-down" className=' mx-auto' style={{ width: '85%' }}>
            <SimpleSlider
                header={'Feedback From Our Student'}
                details={'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.'}
                data={data}

            />
        </div>
    );
};

export default Feedback;