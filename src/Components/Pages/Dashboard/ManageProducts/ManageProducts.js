import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SubManage from './SubManage';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <Container fluid className='mb-4'>
            <h2 className='text-primary'>Manage Products</h2>
            <h2 className='py-3 text-primary'>You can delete any Product</h2>
            <div className='manage-products-contaier'>
                {
                    products.map(product => <SubManage key={product._id} product={product} products={products} setProducts={setProducts} ></SubManage>)
                }
            </div>
        </Container>
    );
};

export default ManageProducts;