import React, { useState, useEffect } from 'react';
import '@/app/gallery/Gallery.css'; // Adjust the path if necessary

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('http://localhost:5000/images');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image._id} className="gallery-item">
          <img src={`http://localhost:5000/${image.path}`} alt={image.originalName} />
          <div className="overlay">
            <div className="title">{image.originalName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
