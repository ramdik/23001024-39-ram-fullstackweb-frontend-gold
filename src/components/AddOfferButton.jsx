import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddOfferButton = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API endpoint
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []); 

  return (
    <div>
      {/* Check User data */}
      {users.length !== 0 ? (
        <Link to="/add-offer">
          <Button variant="primary">Add New Offering</Button>
        </Link>
      ) : (
        <p>No users found. Please sign up to add a new offering.</p>
      )}
    </div>
  );
};

export default AddOfferButton;