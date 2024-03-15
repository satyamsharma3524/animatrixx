import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SlidingCards() {
  const [cards, setCards] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/mangalist/')
      .then(response => {
        setCards(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function toggleText() {
    const textElement = document.querySelector('.text-truncate p');
    textElement.classList.toggle('text-truncate');
  }

  return (
    <div id="carouselExampleControls" className="carousel slide mx-5 my-5" data-bs-ride="carousel">
      <div className="carousel-inner">
          {cards && cards.reduce((acc, card, index) => {
              const chunkIndex = Math.floor(index / 5);
              if (!acc[chunkIndex]) {
                  acc[chunkIndex] = [];
              }
              acc[chunkIndex].push(card);
              return acc;
          }, []).map((chunk, chunkIndex) => (
              <div className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`}>
                  <div className="d-flex justify-content-center">
                      {chunk.map(card => (
                          <div className="card mx-3" style={{width: "18rem"}}>
                              <img className="card-img-top" style={{height: "22rem"}} src={card.image} alt={card.name}></img>
                              <div className="card-body">
                                  <h5 className="card-title">{card.name}</h5>
                                  <p className="card-text text-truncate">{card.description}</p>
                                  <a href="#" className="btn btn-primary">Go somewhere</a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button>
  </div>
  );
}

export default SlidingCards;