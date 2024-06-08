/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='bg-gray-900 text-white py-12' id='about' >
                <div className='max-w-screen-xl mx-auto p-4 flex flex-col items-center md:space-x-10'>
                    <div className="text-center md:text-left" data-aos="fade-up">
                        <h1 className="text-5xl font-bold mb-4 text-left">
                            About Me
                        </h1>
                        <h1 className='text-left'>
                            Fourth semester Informatics Engineering student at Del Institute of Technology who has an interest in developing skills in the developer field, especially Frontend Developer, Backend Developer, and Full-Stack Developer. Has experience in project assignments and being a teaching assistant in the field of database management systems that perform several development methods, including web application development and API development. Have experience in performing several development methods, including proficiency in using SQL Query, Normalization, and MS. Access. I have expertise in creating clean program code to ensure programs are easy to develop and easy to read, able to communicate well, and can work in a team. I can operate several development tools, such as Visual Studio Code, Postman, and XAMPP. Extensive experience and expertise can make a positive contribution to the company's bottom line.
                        </h1>
                        <a
                            href="/resume/CV-SamuelAlbiPuloS.pdf"
                            download
                            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

