import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Pagination } from 'react-bootstrap';
import AddOfferButton from '../components/AddOfferButton';

const Admin = () => {
  const [weddingOffers, setWeddingOffers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWeddingOffer, setSelectedWeddingOffer] = useState({ id: null, userId: "", weddingOfferName: "", weddingOfferAuthor: "", weddingOfferPrice: "", weddingOfferDescription: "" });

  /* Pagination */
  /* const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); */

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
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  const handleEditClick = (weddingOffer) => {
    setSelectedWeddingOffer(weddingOffer);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    const { id, userId, weddingOfferName, weddingOfferAuthor, weddingOfferPrice, weddingOfferDescription, weddingOfferImg } = selectedWeddingOffer;

    fetch(`http://localhost:3000/wedding-offers/${userId}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weddingOfferName, weddingOfferPrice, weddingOfferDescription, weddingOfferImg }), // Send the properties to update
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((updatedWeddingOffer) => {
        setWeddingOffers((prevWeddingOffers) =>
          prevWeddingOffers.map((weddingOffer) => (weddingOffer.id === updatedWeddingOffer.id ? updatedWeddingOffer : weddingOffer))
        );
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error updating Wedding Offer:', error);
      });
  };

  const handleDelete = (userId, id) => {
    // Send a DELETE request to delete the wedding offer endpoint
    fetch(`http://localhost:3000/wedding-offers/${userId}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        // Update the local state
        setWeddingOffers((prevWeddingOffers) =>
          prevWeddingOffers.filter((weddingOffer) => weddingOffer.id !== id)
        );
        alert('Wedding offer deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting Wedding Offer:', error);
        alert('Error deleting wedding offer');
      });
  };


  /* Pagination Handler */
  /* const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }; */

  return (
    <div className='container-sm'>
      <div className="mb-4">
        <AddOfferButton />
      </div>
      <Table striped bordered hover variant="dark">
        {/* Table content */}
        <thead>
          <tr>
            <th className="col-1">No.</th>
            <th className="col-1">Author</th>
            <th className="col-1">Nama Paket</th>
            <th className="col-1">Harga</th>
            <th className="col-3">Description</th>
            <th className="col-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {weddingOffers.length === 0 ? (
            <tr>
              <td colSpan="5">No Data, Please Regist and create Offer data first</td>
            </tr>
          ) : (
            weddingOffers.map((weddingOffer) => (
              <tr key={weddingOffer.id}>
                <td>{weddingOffer.id}</td>
                {/* <td>{weddingOffer.userId}</td> */}
                <td>{weddingOffer.weddingOfferAuthor}</td>
                <td>{weddingOffer.weddingOfferName}</td>
                <td>{weddingOffer.weddingOfferPrice}</td>
                <td>{weddingOffer.weddingOfferDescription}</td>
                <td>
                  <Button variant="primary"
                    onClick={() => handleEditClick(weddingOffer)}
                    className='me-3'
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(weddingOffer.userId, weddingOffer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      {/* <Pagination>
        {Array.from({ length: Math.ceil(weddingOffers.length / itemsPerPage) }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination> */}

      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>ID Offer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post ID"
                value={selectedWeddingOffer.id}
                disabled
              />
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                value={selectedWeddingOffer.weddingOfferAuthor}
                onChange={(e) => setSelectedWeddingOffer({ ...selectedWeddingOffer, weddingOfferAuthor: e.target.value })}
                disabled
              />
              <Form.Label>Offer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Wedding Offer name"
                value={selectedWeddingOffer.weddingOfferName}
                onChange={(e) => setSelectedWeddingOffer({ ...selectedWeddingOffer, weddingOfferName: e.target.value })}
              />
              <Form.Label>Offer Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Offer Price"
                value={selectedWeddingOffer.weddingOfferPrice}
                onChange={(e) => setSelectedWeddingOffer({ ...selectedWeddingOffer, weddingOfferPrice: parseInt(e.target.value) })}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Offer Description"
                value={selectedWeddingOffer.weddingOfferDescription}
                onChange={(e) => setSelectedWeddingOffer({ ...selectedWeddingOffer, weddingOfferDescription: e.target.value })}
              />
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Wedding Offer Image"
                value={selectedWeddingOffer.weddingOfferImg}
                onChange={(e) => setSelectedWeddingOffer({ ...selectedWeddingOffer, weddingOfferImg: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
