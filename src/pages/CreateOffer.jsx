// components/DataForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

const CreateOffer = () => {
    const [formData, setFormData] = useState({
        userId: 1, //user ID 1 Ramadhika
        weddingOfferName: '',
        weddingOfferAuthor: '',
        weddingOfferPrice: '',
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
                // Optionally, you can reset the form after submitting
                setFormData({
                    weddingOfferName: '',
                    weddingOfferAuthor: '',
                    weddingOfferPrice: '',
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
                <Form.Label className='fs-3 mb-4 border-bottom w-100'>Create New Wedding Offer</Form.Label>
                <Form.Group controlId="userID">
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

                <div className="mt-4 w-100">
                    <Button variant="primary" type="submit" className='mx-2'>
                        Save
                    </Button>

                    <Button className='btn-secondary'>
                        <Link to="/admin" className="nav-link">
                            Back
                        </Link>
                    </Button>
                </div>
            </Form>
        </div>

    );
};

export default CreateOffer;

