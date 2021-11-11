import React, { useEffect, useState } from 'react';
import SubExplore from '../SubExplore/SubExplore';


const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <h2>This is Explore section.</h2>
            {
                products.map(product=><SubExplore key={product._id} product={product} ></SubExplore>)
            }
        </div>
    );
};

export default Explore;