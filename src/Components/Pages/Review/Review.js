import React, { useEffect, useState } from 'react';
import SubReview from '../SubReview/SubReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>This is Review section.</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <SubReview key={review._id} review={review} ></SubReview>)
                }
            </div>
        </div>
    );
};

export default Review;