import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const Admin = () => {
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
                setBooks(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='container-sm'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className="col-1">No.</th>
                        <th className="col-1">User ID</th>
                        <th className="col-4">Name</th>
                        <th className="col-1">Genre</th>
                        <th className="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.length === 0 ? (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    ) : (
                        books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.userId}</td>
                                <td>{book.name}</td>
                                <td>{book.genre}</td>
                                <td>
                                    <Button variant="primary">Edit</Button>{' '}
                                    <Button variant="danger">Delete</Button>{' '}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;
