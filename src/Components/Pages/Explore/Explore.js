import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SubExplore from '../SubExplore/SubExplore';


const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <Container fluid>
            <h2>This is Explore section.</h2>
            <div className='product-contaier'>
                {
                    products.map(product => <SubExplore key={product._id} product={product} ></SubExplore>)
                }
            </div>
        </Container>
    );
};

export default Explore;