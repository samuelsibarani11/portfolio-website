/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TypeAnimation } from 'react-type-animation';



const Intro = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-24">
            <div className="max-w-screen-xl mx-auto  flex flex-col md:flex-row items-center md:space-x-10">
                <div className="text-center md:text-left">
                   
                    <h1 className="text-5xl font-bold mb-4">
                        I'm a <span className="text-blue-500">Software Developer</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front-End Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repellendus obcaecati animi? Veritatis corrupti tempora facere ea, hic magni repudiandae quas! Ad necessitatibus ipsum minus dolorum nemo asperiores quas repellat eos labore nobis nisi fugiat facere minima, corrupti, velit culpa praesentium, sint aut. Animi, aliquid dignissimos ipsa necessitatibus neque beatae.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img src="/images/profile_picture-porto.jpg" alt="Profile" className="w-96 h-96 object-cover rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
