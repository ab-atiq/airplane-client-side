import React, { useEffect, useState } from 'react';
import SubManageAllOrders from './SubManageAllProducts';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);
    return (
        <div className='container py-3'>
            <h1 className='text-primary'>My Orders</h1>
            <div className='order-container'>
                {
                    orders.map(order => <SubManageAllOrders key={order._id} order={order} ></SubManageAllOrders>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;