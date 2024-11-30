"use client";
import React, { useState } from 'react';
import Gallery from '@/app/gallery/Gallery'; // Ensure the path is correct
import Nav from '@/components/Nav';
import '@/app/gallery/Gallery.css'; // Import the CSS file

const GalleryPage = () => {
  const [file, setFile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Refresh the gallery after a successful upload
      window.location.reload();
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="h-screen">
      <Nav />
      <div className="gallery-container">
        <button onClick={toggleForm} className="upload-toggle-button">Upload</button>
        {showForm && (
          <form className="upload-form" onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit" className="upload-button">Submit</button>
          </form>
        )}
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
