import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Carousel() {
  const [images, setImages] = useState('');
  const SERVER_BASE_URL = "http://localhost:8000/";

  useEffect(() => {
    axios.get('http://localhost:8000/api/carousel/')
      .then(response => {
        setImages(response.data.images);
        console.log(response.data.images);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide mx-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ height: "50vh" }}>
            {images && images.map((image, index) => (
                <div className="carousel-item active" key={index}>
                <img src={SERVER_BASE_URL + image.image} id={image.id} className="d-block w-100" alt={image.name}></img>
                </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  );
}

export default Carousel;