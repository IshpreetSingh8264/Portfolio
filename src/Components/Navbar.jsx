import React from 'react';

export default function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl backdrop-blur-lg fixed top-0 z-10 bg-gray-900 bg-opacity-90">
            <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
                <h3 className="text-3xl text-emerald-400 font-bold">
                    Ishpreet Singh
                </h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-gray-300 hover:text-white hover:bg-emerald-600"
                            onClick={() => scrollToSection("about")}
                            href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-gray-300 hover:text-white hover:bg-emerald-600"
                            onClick={() => scrollToSection("skills")}
                            href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-gray-300 hover:text-white hover:bg-emerald-600"
                            onClick={() => scrollToSection("projects")}
                            href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-gray-300 hover:text-white hover:bg-emerald-600"
                            onClick={() => scrollToSection("contact")}
                            href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
