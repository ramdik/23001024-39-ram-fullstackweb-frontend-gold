import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import '../assets/styles/Cards.css';
import StarRating from './StarRating';

const Cards = () => {
  const [weddingOffers, setWeddingOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/wedding-offers')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setWeddingOffers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" role="status"/>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <div className="card-container">
      {weddingOffers.map((weddingOffer) => (
        <Card key={weddingOffer.id} className='card'>
          <Card.Img variant="top" src={weddingOffer.weddingOfferImg} className='img-thumbnail max-width: 100%'/>
          <Card.Body>
            <Card.Title>{weddingOffer.weddingOfferName}</Card.Title>
            <Card.Text>
              {weddingOffer.weddingOfferDescription}.
            </Card.Text>
            <div className="d-flex justify-content-between">
            <Card.Text>
            {formatPrice(weddingOffer.weddingOfferPrice)}
            </Card.Text>
            <StarRating rating={5} />
            </div>
            <Button variant="primary" className='w-100'>Hubungi Kami</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
