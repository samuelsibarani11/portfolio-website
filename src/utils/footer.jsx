// eslint-disable-next-line no-unused-vars
import React from "react"

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white pt-24' id='skill'>
            <div className='max-w-screen-xl mx-auto p-4'>
                <div className='max-w-screen-xl mx-auto p-4 md:px-0'>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" data-aos="fade-up">
                            Portfolio
                        </span>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400" >
                            <li >
                                <a href="https://github.com/samuelsibarani11" className="hover:underline me-4 md:me-6">
                                    <img src="/images/icon-skills/github.png" alt="GitHub" className="rounded-xl h-12 w-12" data-aos="fade-up" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/samuel-albi-pulo-s-084392272/" className="hover:underline me-4 md:me-6">
                                    <img src="/images/icon-skills/linkedin.png" alt="GitHub" className="rounded-full h-20 w-20" data-aos="fade-up" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/samuel_sibarani14 " className="hover:underline me-4 md:me-6">
                                    <img src="/images/icon-skills/instagram.png" alt="GitHub" className="rounded-xl h-12 w-12" data-aos="fade-up" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 flex">
                        © 2024
                        <div className="underline px-3">
                            Samuel Albi Pulo S
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
