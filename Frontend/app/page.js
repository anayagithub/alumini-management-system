
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
    <div className="h-screen">
      <Services />
      <Aboutus />
      <Gallery/>
      <Contact />
    </div>
  );
}

