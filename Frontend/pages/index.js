"use client";
import React, { useState } from 'react';
import "@/app/layout.js";
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Nav from '@/components/Nav'; 
import Login from '@/components/Login'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Start on the "home" page by default

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Render Nav component only if not on the login page */}
      {currentPage !== "login" && <Nav setCurrentPage={setCurrentPage} />} {/* Pass setCurrentPage to Nav for navigation */}

      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            <div id="home" className="h-auto w-screen pt-2">
              {/* Add your home content here */}
            </div>

            <div id="services" className="h-auto w-screen pt-2">
              <Services />
            </div>

            <div id="about" className="h-auto w-screen pt-2">
              <Aboutus />
            </div>

            <div id="contact" className="h-auto w-screen pt-2">
              <Contact />
            </div>
          </>
        )}

        {currentPage === "login" && (
          <div className="h-screen w-screen">
            {/* Login Page */}
            <Login setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage to Login component */}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto flex flex-wrap justify-between px-4">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-xl">
              Our Alumni Management System bridges the gap between alumni and their alma mater,
              offering a platform for connection and growth.
            </p>
          </div>
          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="text-xl space-y-2">
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
              <span className="text-xl">Facebook</span> 
              <span className="text-xl">Twitter</span> 
              <span className="text-xl">LinkedIn</span> 
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
