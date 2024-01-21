import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Register = () => {
  const navigate = useNavigate(); // Use useHistory hook to get access to the history object

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData);

      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate('/admin'); // redirect after submit sucesss
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration error:', error); //show error
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Account Regist Hanya 1 ID Untuk Admin
    </Tooltip>
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Register Admin</h3>
            </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 150, hide: 300 }}
                  overlay={renderTooltip}
                > 
                <Button variant="primary" type="submit">
                  Register
                </Button>
                </OverlayTrigger>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
