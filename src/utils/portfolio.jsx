// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Portfolio = () => {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const [showFullText3, setShowFullText3] = useState(false);
    const [showFullText4, setShowFullText4] = useState(false);

    const text1 = `Del Clinic at Del Institute of Technology serves students and staff, managing patient registration manually and providing sick leave letters for dormitory stays. They're looking to automate these processes with a mobile app, using UCD for design and quantitative-qualitative methods for data collection. The result will be mockups for home, profile, appointment, and notification interfaces.`;
    const text2 = `Del Clinic at Del Institute of Technology aims to automate manual processes for managing patient registration and providing sick leave letters through a mobile app using a microservices architecture. This will break the system into modular, independent services, each handling specific functions like user management, appointment scheduling, notifications, and documentation. By employing User-Centered Design (UCD) and both quantitative and qualitative data collection methods, the project will ensure a user-friendly solution. The result will be detailed mockups for home, profile, appointment, and notification interfaces, leading to a scalable, flexible, and robust API that meets the institution's evolving needs while providing a seamless user experience.`;
    const text3 = `Lumban Binanga Village, Laguboti, Toba, North Sumatra This village is one of the villages that has not been widely known by tourists both domestic tourists and foreign tourists. This village has a lot of natural beauty that is a pity to miss. Although this village is located remotely, when tourists visit this village they will not get regrets.`;
    const text4 = `Siallagan itself is the name of a king who first built this village named Raja Laga Siallagan and still has the lineage of the original Batak tribe.`;

    const toggleShowFullText1 = () => {
        setShowFullText1(!showFullText1);
    };

    const toggleShowFullText2 = () => {
        setShowFullText2(!showFullText2);
    };

    const toggleShowFullText3 = () => {
        setShowFullText3(!showFullText3);
    };

    const toggleShowFullText4 = () => {
        setShowFullText4(!showFullText4);
    };

    return (
        <>
            <div className='bg-gray-900 text-white py-24' id='project'>
                <div className='max-w-screen-xl mx-auto p-4' data-aos="fade-up">
                    <h1 className="text-5xl font-bold">Project</h1>

                    <div className='md:grid md:grid-cols-3 md:gap-8'>

                        <div className='md:w-96 md:mx-auto md:my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-60 object-cover" src="/images/image-project/del-clinic-app.jpg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Del Clinic App
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {showFullText1 ? text1 : `${text1.slice(0, 50)}...`}
                                    </p>
                                    {text1.length > 50 && (
                                        <button onClick={toggleShowFullText1} className="text-blue-500 hover:underline">
                                            {showFullText1 ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                    <a href="https://github.com/khensin166/PA2-Kel9" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/github.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-96 md:mx-auto md:my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-60 object-cover" src="/images/image-project/microservices.png" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Del Clinic Microservice API
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {showFullText2 ? text2 : `${text2.slice(0, 50)}...`}
                                    </p>
                                    {text2.length > 50 && (
                                        <button onClick={toggleShowFullText2} className="text-blue-500 hover:underline">
                                            {showFullText2 ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                    <a href="https://github.com/samuelsibarani11/del-clinic-microservices" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/github.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-96 md:mx-auto md:my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-60 object-cover" src="/images/image-project/lumban-binanga.jpg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Lumban Binanga Village Wesbite
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {showFullText3 ? text3 : `${text3.slice(0, 50)}...`}
                                    </p>
                                    {text3.length > 50 && (
                                        <button onClick={toggleShowFullText3} className="text-blue-500 hover:underline">
                                            {showFullText3 ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                    <a href="https://github.com/rickyananada1/PA1-Kel11" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/github.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-96 md:mx-auto md:my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-60 object-cover" src="/images/image-project/huta-siallagan.png" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Huta Siallagan Wesbite
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {showFullText4 ? text4 : `${text4.slice(0, 50)}...`}
                                    </p>
                                    {text4.length > 50 && (
                                        <button onClick={toggleShowFullText4} className="text-blue-500 hover:underline">
                                            {showFullText4 ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                    <a href="https://huta-siallagan.vercel.app/" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/link.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
