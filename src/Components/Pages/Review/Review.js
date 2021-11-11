import React, { useEffect, useState } from 'react';
import SubReview from '../SubReview/SubReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>This is Review section.</h1>
            {
                reviews.map(review=><SubReview key={review.name} review={review} ></SubReview>)
            }
        </div>
    );
};

export default Review;