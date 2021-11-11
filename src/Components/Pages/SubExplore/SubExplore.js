import React from 'react';
import { Button } from 'react-bootstrap';

const SubExplore = ({ product }) => {
    const { name, image, description } = product;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <h6>{description}</h6>
            <Button>Purchase</Button>
        </div>
    );
};

export default SubExplore;