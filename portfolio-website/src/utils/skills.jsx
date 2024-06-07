/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Skills = () => {
    const [selectedContent, setSelectedContent] = useState('programmingLanguages');

    const handleContentChange = (content, event) => {
        event.preventDefault();
        setSelectedContent(content);
    };

    return (
        <>
            <div className='bg-gray-900 text-white pt-24'>
                <div className='max-w-screen-xl mx-auto p-4'>
                    <div className="text-center md:text-left">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        onClick={(e) => handleContentChange('programmingLanguages', e)}
                                        className="inline-flex items-center text-3xl font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className="rtl:rotate-180 w-4 h-4 text-gray-400 mx-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                        <a
                                            href="#"
                                            onClick={(e) => handleContentChange('tools', e)}
                                            className="ms-1 text-3xl font-bold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            Tools
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                        {selectedContent === 'programmingLanguages' && (
                            <>
                                <h1 className='text-3xl font-semibold mb-4 mt-5'>Programming Languages</h1>


                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5">
                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <h1 className='text-3xl font-semibold mt-12'>Framework</h1>

                                <div className="flex flex-wrap justify-center md:justify-start gap-10 py-5">


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )}

                        {selectedContent === 'tools' && (
                            <>
                                <h1 className='text-3xl font-semibold mb-4 mt-5'>Design</h1>
                                <div className='flex flex-wrap justify-center md:justify-start gap-10 py-5'>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <h1 className='text-3xl font-semibold mb-4 mt-12'>Editor & Modeling</h1>
                                <div className='flex flex-wrap justify-center md:justify-start gap-10 py-5'>
                                    {/* Editor and Modeling Tools Icons */}


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <h1 className='text-3xl font-semibold mb-4 mt-12'>Version Control</h1>
                                <div className='flex flex-wrap justify-center md:justify-start gap-10 py-5'>

                                    <div className="card relative w-64 h-16 border-2 border-gray-800 rounded-lg overflow-hidden">
                                        <div className="card-default-content absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                                                alt="HTML5 Logo"
                                                className="h-12 mr-2"
                                            />
                                            <span className="text-white">HTML</span>
                                        </div>
                                        <div className="card-hover-content absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition-opacity duration-300 opacity-0">
                                            <div>
                                                <span className="text-blue-200 font-semibold">Advanced</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Inline styles for hover effects */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".card-hover-content { opacity: 0; transition: opacity 0.3s ease; } .card:hover .card-hover-content { opacity: 1; } .card:hover .card-default-content { opacity: 0; }"
                }}
            />
        </>
    );
};

export default Skills;
