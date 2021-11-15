import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    // const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    // const initialInfo = { buyerName: user.displayName };
    // console.log(initialInfo);
    const [purchaseInfo, setPurchaseInfo] = useState({});

    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const matchedProduct = data.find(sinPro => sinPro._id === purchaseId);
                setProduct(matchedProduct);
            });
    }, [purchaseId]);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {
        product.proId = product._id;
        delete product._id;
        const information = { ...product };
        information.email = user.email;
        // console.log(information);
        // send to the server
        fetch('https://stormy-everglades-33424.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Information successfully submitted.!');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1 className='text-primary'>Please, give your right info for purchase product.</h1>
            <h1>{product?.name}</h1>
            <img style={{ width: '200px' }} src={product?.image} alt="" />
            <form onSubmit={handlePurchaseSubmit}>
                <label>Product ID:</label>
                <input type="text" onBlur={handleOnBlur} defaultValue={product?._id} name='product' disabled />
                <label>Name:</label>
                <input type="text" onBlur={handleOnBlur} defaultValue={user.displayName} name='buyerName' />
                <label>Email:</label>
                <input type="email" defaultValue={user.email} onBlur={handleOnBlur} name='email' />
                <label>Number:</label>
                <input type="number" placeholder='Phone Number' name='phone' onBlur={handleOnBlur} />
                <label>Address:</label>
                <textarea placeholder="Give your details Information" id="" cols="10" rows="5" name='address' onBlur={handleOnBlur}></textarea>
                <input style={{ width: '90px' }} className='btn btn-primary' type="submit" value="Purchase" />
            </form>
        </div>
    );
};

export default Purchase;