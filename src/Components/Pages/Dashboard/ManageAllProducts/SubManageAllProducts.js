import React from 'react';

const SubManageAllOrders = ({order}) => {
    const { name, image, price, email } = order;
    return (
        <div className='sub-order-container'>
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            <img className='img-fluid my-4' src={image} alt="" />
            <br />
            <h6>Email:{email}</h6>
        </div>
    );
};

export default SubManageAllOrders;