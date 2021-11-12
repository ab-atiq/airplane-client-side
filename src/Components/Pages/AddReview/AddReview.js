import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const {user}=useAuth();
    const initialInfo = { name: user.displayName, image:user.photoURL };
    // const initialInfo = { buyerName: user.displayName };
    console.log(initialInfo);
    const [review, setReview] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        console.log(newInfo);
        setReview(newInfo);
    }

    const handleReviewSubmit = e => {
        const reviewAdd = { ...review };
        // console.log(review);
        // send to the server
        fetch('https://stormy-everglades-33424.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewAdd)
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
        <Container>
            <h1>Please, add a review</h1>
            <form onSubmit={handleReviewSubmit} >
                <input type="text" name='name' placeholder='Name' defaultValue={user.displayName} onBlur={handleOnBlur} required/>
                <input type="text" name='image' placeholder='Your Image URL' defaultValue={user.photoURL} onBlur={handleOnBlur} required/>
                <input type="number" name='star' placeholder='Rating (Please give 1-5 number)' onBlur={handleOnBlur} min="1" max="5" required/>
                <textarea type="text" name='description' rows='10' placeholder='Description' onBlur={handleOnBlur} required/>
                <input style={{ width: '110px' }} className='btn btn-primary' type="submit" value="Add Review" />
            </form>
        </Container>
    );
};

export default AddReview;