import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Defence = () => {
    return (
        <div>
            <h3>Defence Plane.</h3>
            <Row className='mb-2'>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/f-15ex.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            F-15EX
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/defense/ch-47_chinook/images/chinook-block-ii-70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            CHINOOK II
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/b-1b-bomber.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            B-1B LANCHER
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/c-17.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            GLOBEMASTER III
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/mh139_grey_wolf_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            MH-129A GREY WOLF
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/ch-mh-47-chinook.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            H-47 CHINOOK
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/commercial/freighters.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            FREITERS
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/defense/ea-18g-growler.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            EA-18G GROWLER
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Defence;