import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubExplore = ({ product }) => {
    const { _id, name, image, description } = product;
    return (
        <div className='product-container'>
            <h2>{name}</h2>
            <img className='img-fluid my-4' src={image} alt="" />
            <h3>Description:</h3>
            <h6>{description}</h6>
            <Link to={`/purchase/${_id}`}><Button>Purchase</Button></Link>
        </div>
    );
};

export default SubExplore;