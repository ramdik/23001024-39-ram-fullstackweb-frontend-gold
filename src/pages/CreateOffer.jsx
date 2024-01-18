// components/DataForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const CreateOffer = ({ onSave }) => {
    const [formData, setFormData] = useState({
        userId: 1, //user ID 1 Ramadhika
        weddingOfferName: '',
        weddingOfferAuthor: '',
        weddingOfferPrice: parseInt(''),
        weddingOfferDescription: '',
        weddingOfferImg: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Make a POST request to your API endpoint
        fetch('http://localhost:3000/wedding-offers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Call the onSave function passed from the parent component
            onSave(data);
            // Optionally, you can reset the form after submitting
            setFormData({
              weddingOfferName: '',
              weddingOfferAuthor: '',
              weddingOfferPrice: parseInt(''),
              weddingOfferDescription: '',
              weddingOfferImg: '',
            });
          })
          .catch((error) => {
            console.error('Error adding wedding offer:', error);
          });
      };

    return (
        <div className="container-sm">
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userID">
                    <Form.Label>User</Form.Label>
                    <Form.Control
                        type="text"
                        name="user"
                        value={formData.userId}
                        onChange={handleChange}
                        disabled
                        hidden
                    />
                </Form.Group>

                <Form.Group controlId="weddingOfferName">
                    <Form.Label>Offer Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="weddingOfferName"
                        value={formData.weddingOfferName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="weddingOfferAuthor">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control
                        type="text"
                        name="weddingOfferAuthor"
                        value={formData.weddingOfferAuthor}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="weddingOfferPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type="number"
                        name="weddingOfferPrice"
                        value={formData.weddingOfferPrice}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="weddingOfferDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="weddingOfferDescription"
                        value={formData.weddingOfferDescription}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="weddingOfferImg">
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type="text"
                        name="weddingOfferImg"
                        value={formData.weddingOfferImg}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>

                <Button className='btn-secondary'>
                    <Link to="/admin" className="nav-link">
                        Back
                    </Link>
                </Button>
            </Form>
        </div>

    );
};

export default CreateOffer;

