import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
const SubReview = ({ review }) => {
    const { name, image, star, description } = review;
    return (
        <div>
            <div>
                {
                    review.image ?
                        <img className='rounded-circle' style={{ width: "100px", height: "100px" }} src={image} alt="" />
                        :
                        <FontAwesomeIcon style={{ fontSize: '100px' }} icon={faUserTie}></FontAwesomeIcon>
                }
            </div>
            <h2>{name}</h2>
            <h5>Star: {star}</h5>
            <p>Description: {description}</p>
        </div>
    );
};

export default SubReview;