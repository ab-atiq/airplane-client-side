import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, image, description } = props.product;
    return (
        <div>
            <h1>{name}</h1>
            <img className='img-fluid' src={image} alt="" />
            <h6>{description}</h6>
            <Link to={`/purchase/${_id}`}><Button>Purchase</Button></Link>
        </div>
    );
};

export default Product;