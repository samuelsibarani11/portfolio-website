/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-center py-24">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0">
                <div className="flex-shrink-0 px-4 md:px-0">
                    <img src="/images/profile_picture-porto.jpg" alt="Profile" className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full" />
                </div>
                <div className="text-left px-4 md:px-0">
                    <h1 className="text-5xl font-bold mb-4">
                        I'm a <span className="text-blue-500">Software Developer</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Front-End Developer',
                            1000,
                            'Back-end Developer',
                            1000,
                            'Full-Stack Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className="mb-4 py-6">
                        Hello, welcome to my portfolio website! My name is Samuel Albi Pulo S. I am a fourth-semester Information Technology student at Del Institute of Technology. I was born in Jakarta on November 11, 2004. My hobby is programming, playing online games, listening to music, and watching movies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
