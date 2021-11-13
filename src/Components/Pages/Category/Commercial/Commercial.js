import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Commercial = () => {
    return (
        <div className='category-container'>
            <h3>Commercial Plane</h3>
            <Row className='mb-2'>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/737ng.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            Generation 737
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/737max.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            737 MAX
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/747-8.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            747-8
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/767.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            Generation 767
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/777.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            Generation 777
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/777x.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            777X
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/freighters.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            FREITERS
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col xs={6} sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/boeing-business-jets.jpg" alt="" />
                        </Col>
                        <Col xs={6} sm={8}>
                            BOEING JETS
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Commercial;