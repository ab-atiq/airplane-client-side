import React from 'react';
import { Button } from 'react-bootstrap';

const SubManage = ({ product, products, setProducts }) => {
    const { _id, name, image } = product;

    const handleDelete = id => {
        const url = `https://stormy-everglades-33424.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully.');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    }

    return (
        <div className='sub-manage-container'>
            <h2>{name}</h2>
            <img className='img-fluid my-4' src={image} alt="" />
            <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </div>
    );
};

export default SubManage;