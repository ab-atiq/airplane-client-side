import React from 'react';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    const { name, image, description } = props.product;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <h6>{description}</h6>
            <Button>Purchase</Button>
        </div>
    );
};

export default Product;