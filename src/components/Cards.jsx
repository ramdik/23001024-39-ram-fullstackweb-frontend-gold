import React, { useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import '../assets/styles/Cards.css'

const Cards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <Card key={book.id} className='card'>
            <Card.Img variant="top" src={book.image} className='img-thumbnail'/>
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cards;