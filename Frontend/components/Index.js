"use client";
import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="bg-gray-800 text-white py-8 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Welcome to the Alumni Management System
                </h1>
                <p className="text-lg">
                    Reconnect with your classmates, stay updated on alumni events, and explore new career opportunities.
                </p>
            </header>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-8">
                <div className="container mx-auto flex flex-wrap justify-between px-4">
                    {/* About Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-sm">
                            Our Alumni Management System bridges the gap between alumni and their alma mater,
                            offering a platform for connection and growth.
                        </p>
                    </div>
                    {/* Links Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Social Section */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:underline">
                                <span className="sr-only">Facebook</span>
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" className="hover:underline">
                                <span className="sr-only">Twitter</span>
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="hover:underline">
                                <span className="sr-only">LinkedIn</span>
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    &copy; 2024 Alumni Management System. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
