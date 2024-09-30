import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS for carousel

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'image1.jpg', // Ensure you have this image in your public folder or change the path accordingly
    'image2.jpg',
    'image3.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
  ];

  const showSlide = (index) => {
    const totalSlides = images.length;
    if (index >= totalSlides) setCurrentIndex(0);
    else if (index < 0) setCurrentIndex(totalSlides - 1);
    else setCurrentIndex(index);
  };

  const changeSlide = (direction) => {
    showSlide(currentIndex + direction);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
    </div>
  );
}

export default Carousel;
