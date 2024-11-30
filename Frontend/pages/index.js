"use client";
import React from 'react';
import "@/app/layout"
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Nav from '@/components/Nav'; 
import Login from '@/components/Login';
import Index from '@/components/Index';

const Home = () => {
  return (
    <div className="h-screen">
      <Nav />
      <Services />
      <Aboutus />
      <Contact />
    </div>
  );
};

export default Home;
