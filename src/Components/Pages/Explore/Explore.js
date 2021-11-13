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
        <Container fluid className='mb-4'>
            <h2 className='py-3 text-primary'>All products</h2>
            <div className='products-contaier'>
                {
                    products.map(product => <SubExplore key={product._id} product={product} ></SubExplore>)
                }
            </div>
        </Container>
    );
};

export default Explore;