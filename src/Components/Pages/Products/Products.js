import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/limitProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container fluid>
            <h1 className='text-primary py-3'>Some Products</h1>
            <div className="products-contaier">
                {
                    products.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </Container>
    );
};

export default Products;