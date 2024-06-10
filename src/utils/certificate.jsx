// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Certificate = () => {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const [showFullText3, setShowFullText3] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const text1 = `The Google Developer Student Clubs (GDSC) Hackfest is an annual event organized by GDSC, a global initiative supported by Google to empower students to develop technology and programming skills. This hackfest usually takes the form of a hackathon, where participants work in teams to develop innovative technology solutions within a limited time.`;
    const text2 = `Programming competition held in the Information Technology department is an event designed to test students' skills in solving programming problems within a certain time limit.`;
    const text3 = `The ReactJS workshop held by Dunia Coding with a focus on building a movie search website using APIs is designed to give participants practical experience in building modern web applications using ReactJS.`;

    const toggleShowFullText1 = () => {
        setShowFullText1(!showFullText1);
    };

    const toggleShowFullText2 = () => {
        setShowFullText2(!showFullText2);
    };

    const toggleShowFullText3 = () => {
        setShowFullText3(!showFullText3);
    };

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <div className='bg-gray-900 text-white py-24' id='certificate'>
                <div className='max-w-screen-xl mx-auto p-4' data-aos="fade-up">
                    <h1 className="text-5xl font-bold">Certificate</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        <div className='w-full mx-auto my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#certificate" onClick={() => openModal("/images/certificate/Hackfest.jpg")}>
                                    <img src="/images/certificate/Hackfest.jpg" alt="Certificate" className="rounded-t-lg w-full h-60 object-cover" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Hackfest Participant
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
                                    <a href="https://drive.google.com/file/d/1320ua-FwOYsWXdldxBrVZIlUIYQoYUlt/view" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/link.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mx-auto my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#certificate" onClick={() => openModal("/images/certificate/3rd-hmc.jpg")}>
                                    <img src="/images/certificate/3rd-hmc.jpg" alt="Certificate" className="rounded-t-lg w-full h-60 object-cover" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            3rd Place Himatif Coding Day
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
                                    <a href="https://drive.google.com/file/d/1GYSpiaQLRBqHMel2ti8pETh7h8tT-KyZ/view" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/link.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mx-auto my-4 pt-5'>
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#certificate" onClick={() => openModal("/images/certificate/reactjs-dunia-coding.jpg")}>
                                    <img src="/images/certificate/reactjs-dunia-coding.jpg" alt="Certificate" className="rounded-t-lg w-full h-60 object-cover" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Dunia Coding React JS Workshop
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
                                    <a href="https://drive.google.com/file/d/1lcuL-VE16FPsSFyA0EKMVLw-3-ASKSip/view" className="hover:underline me-4 md:me-6 flex justify-end">
                                        <img src="/images/icon-skills/link.png" alt="GitHub" className="rounded-xl h-12 w-12" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative bg-white rounded-lg max-w-3xl p-4">
                        <button
                            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <img src={modalImage} alt="Certificate" className="rounded-lg max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Certificate;
