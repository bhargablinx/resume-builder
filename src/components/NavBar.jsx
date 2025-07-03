import { useState } from "react";

export const NavBar = () => {
    const isLogin = true; // will be updated later after handling authentication
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-light px-6 py-3 shadow-md">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-dark-red">
                    ResumeBuilder
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <i className="fa-solid fa-xmark text-dark"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </button>
                </div>

                {/* Desktop Links */}
                <ul className="hidden lg:flex gap-6 text-dark font-medium">
                    <li>
                        <a href="#templates" className="hover:text-dark-red">
                            Templates
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-dark-red">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#help" className="hover:text-dark-red">
                            Help
                        </a>
                    </li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    {isLogin ? (
                        <button className="bg-light-red hover:bg-light-red-hover text-light px-4 py-2 rounded-md font-medium">
                            Logout
                        </button>
                    ) : (
                        <button className="bg-dark-red hover:bg-dark-red-hover text-light px-4 py-2 rounded-md font-medium">
                            Login
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mt-4 flex flex-col gap-4 lg:hidden text-dark font-medium">
                    <a href="#templates" className="hover:text-dark-red">
                        Templates
                    </a>
                    <a href="#about" className="hover:text-dark-red">
                        About
                    </a>
                    <a href="#help" className="hover:text-dark-red">
                        Help
                    </a>
                    {isLogin ? (
                        <button className="bg-light-red hover:bg-[rgb(200,50,50)] text-light px-4 py-2 rounded-md font-medium">
                            Logout
                        </button>
                    ) : (
                        <button className="bg-dark-red hover:bg-[rgb(120,18,18)] text-light px-4 py-2 rounded-md font-medium">
                            Login
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};
