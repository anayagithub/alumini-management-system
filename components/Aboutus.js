import React from 'react';
import './Aboutus.css'; 

const Aboutus = () => {
    return (
        <div className="flex justify-center items-center bg-white w-11/12 max-w-7xl   p-10  shadow-lg overflow-y-auto mx-auto mt-5">
            <img src='/Images/aboutus.jpg' alt='About Us' className="aboutus-image" />
            <div className="aboutus-content">
                <h1 className="aboutus-title">About Us</h1>
                <p className="aboutus-description">
                    Welcome to our Alumni Management App! We are dedicated to building a vibrant community 
                    where alumni can connect, share experiences, and support one another. Our platform makes 
                    it easy to create profiles, network, and access exclusive resources like job postings 
                    and event notifications. Join us to celebrate achievements, foster collaboration, and 
                    give back to your alma mater. Let's keep the spirit of our educational journey alive 
                    and thrive together!
                </p>
                <button type="button" className="aboutus-button">Contact Us</button>
            </div>
        </div>
    );
};

export default Aboutus;
