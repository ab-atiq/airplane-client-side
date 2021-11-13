import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SubReview from '../SubReview/SubReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stormy-everglades-33424.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className='mb-5'>
            <h1 className='my-4 text-primary'>All Reviews</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <SubReview key={review._id} review={review} ></SubReview>)
                }
            </div>
        </Container>
    );
};

export default Review;