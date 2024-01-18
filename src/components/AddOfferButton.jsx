import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddOfferButton = ({ onClick }) => {
  return (
    <Link to="/add-offer">
      <Button variant="primary">Add New Offering</Button>
    </Link>
  );
};

export default AddOfferButton;