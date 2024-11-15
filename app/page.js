
"use client";
import React, { useState } from 'react';
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Gallery from '@/components/Gallery';
import Nav from '@/components/Nav'; 
import Login from "@/components/Login"; 
import Index from '@/components/Index'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Start on the "home" page by default

  return (
    <div className="h-screen w-screen">
      {/* Render Nav component only if not on the login page */}
      {currentPage !== "login" && <Nav setCurrentPage={setCurrentPage} />} {/* Pass setCurrentPage to Nav for navigation */}

      {currentPage === "home" ? (
        <div>
          {/* Home Page with Components */}
          <Services />
          <Aboutus />
          <Gallery />
          <Contact />
          <Index/>
          {/* Gallery rendered on home page */}
        </div>
      ) : (
        <div>
          {/* Login Page */}
          <Login setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage to Login component */}
        </div>
      )}
    </div>
  );
}

