import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import { Col, Container, Row } from 'react-bootstrap';

const SubReview = ({ review }) => {
    const { name, image, star, description } = review;
    return (
        <Container>
            <Row sm={12} className="justify-content-center mb-3">
                <Col>
                    {
                        review.image ?
                            <img className='rounded-circle' style={{ width: "100px", height: "100px" }} src={image} alt="" />
                            :
                            <FontAwesomeIcon style={{ fontSize: '100px' }} icon={faUserTie}></FontAwesomeIcon>
                    }
                </Col>
                <Col>
                    <h2>{name}</h2>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        readonly
                    />
                </Col>
            </Row>
            <p><b>Description: </b> {description}</p>
        </Container>
    );
};

export default SubReview;