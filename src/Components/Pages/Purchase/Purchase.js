import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const matchedProduct = data.find(sinPro => sinPro._id == purchaseId)
                setProduct(matchedProduct)
            });
    }, [])
    
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    // const initialInfo = { buyerName: user.displayName };
    // console.log(initialInfo);
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setPurchaseInfo(newInfo);
    }

    const handlePurchaseSubmit = e => {
        const information = { ...purchaseInfo };
        console.log(information);
        // send to the server
        fetch('http://localhost:5000/buyers', {
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
        <div>
            <h1>Please, give your right info for purchase product.</h1>
            <h1>{product._id}</h1>
            <form onSubmit={handlePurchaseSubmit}>
                <input type="text" onBlur={handleOnBlur} defaultValue={user.displayName} name='buyerName' />
                <input type="email" defaultValue={user.email} onBlur={handleOnBlur} name='email' />
                <input type="number" placeholder='Phone Number' name='phone' onBlur={handleOnBlur} />
                <textarea placeholder="Give your details Information" id="" cols="10" rows="5" name='address' onBlur={handleOnBlur}></textarea>
                <input style={{ width: '80px' }} className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Purchase;