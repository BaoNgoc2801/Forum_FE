"use client";

import Link from "next/link";
import { useState } from "react";
import { Video } from "lucide-react"; // Using Lucide for icon
import AuthModal from "@/app/auth/page";

const Header = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const openModal = () => {
        setShowAuthModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowAuthModal(false);
    };

    return (
        <header className="bg-black text-white shadow-md py-4">
            <div className="mx-auto px-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <img
                            src="/image/logo.png"
                            alt="Logo"
                            className="w-12 h-12 object-contain"
                        />
                    </Link>
                    <h1 className="text-2xl font-bold">EchoVerse</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/livestream">
                        Livestream
                    </Link>
                    <Link href="/profile">
                        Profile
                    </Link>
                    <Link href="/settings">
                        Settings
                    </Link>

                </nav>


                {/* Search Bar and Sign In Button */}
                <div className="flex items-center space-x-4">
                    {/* Go Live Button */}
                    <Link href="/livestream">
                        <button className="flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
                            <Video size={18} />
                            <span>Go Live</span>
                        </button>
                    </Link>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-800 text-white rounded-full px-4 py-2 w-72 focus:outline-none"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.5 18h-.01M21 21l-6-6M10 4a6 6 0 10 0 12 6 6 0 000-12z"
                            />
                        </svg>
                    </div>



                    {/* Sign In Button */}
                    <button
                        onClick={openModal} // Open the modal on click
                        className="bg-green-800 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl">
                    <i className="fas fa-bars"></i> {/* Hamburger icon */}
                </button>
            </div>

            {showAuthModal && <AuthModal onClose={closeModal}/>}

        </header>
    );
};

export default Header;
