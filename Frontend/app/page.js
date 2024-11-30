"use client";
import React, { useState } from 'react';
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Gallery from '@/components/Gallery';
import Nav from '@/components/Nav'; 
import Login from '@/components/Login'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Start on the "home" page by default

  return (
    <div className="h-screen w-screen">
      {/* Render Nav component only if not on the login page */}
      {currentPage !== "login" && <Nav setCurrentPage={setCurrentPage} />} {/* Pass setCurrentPage to Nav for navigation */}

      {currentPage === "home" && (
        <>
          <div id="home" className="h-auto w-screen pt-2">
          </div>

          <div id="services" className="h-auto w-screen pt-2">
            <Services />
          </div>

          <div id="about" className="h-auto w-screen pt-2">
            <Aboutus />
          </div>

          <div id="gallery" className="h-auto w-screen pt-2">
            <Gallery />
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
    </div>
  );
}
