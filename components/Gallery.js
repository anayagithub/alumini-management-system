
"use client";
import React, { useState } from 'react';
import './Gallery.css'; // Ensuring we use the same global styles

const Gallery = () => {
  const [images, setImages] = useState([
    { src: '/Images/Graduation Ceremony.jpg', description: 'Graduation Ceremony' },
    { src: '/Images/University Hallway.jpg', description: 'University Hallway' },
    { src: '/Images/Alumni Meet.jpg', description: 'Alumni Community' },
  ]);

  const [newImage, setNewImage] = useState({ src: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setImages([...images, newImage]);
    setNewImage({ src: '', description: '' });
    setShowForm(false); // Hide form after upload
  };

  return (
    <div className="section">
      <h1 className="section-title">Gallery</h1>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img className="gallery-image" src={image.src} alt={image.description} />
            <div className="description">{image.description}</div>
          </div>
        ))}
      </div>
      <div className="dropdown-container">
        <button className="button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Upload Form" : "Add More Images"}
        </button>
        {showForm && (
          <form className="upload-form" onSubmit={handleUpload}>
            <input
              className="input"
              type="text"
              placeholder="Image URL"
              value={newImage.src}
              onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Image Description"
              value={newImage.description}
              onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
              required
            />
            <button className="button" type="submit">Upload Image</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Gallery;
