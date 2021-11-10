import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Space = () => {
    return (
        <div>
            <h3>Space Flight.</h3>
            <Row className='mb-2'>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/x37b_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            X-37B
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/boeing-satellite-family.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            SATELITE FAMILY
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/starliner_meganav_new_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            CST-100
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/aerospace_connectivity_meganav_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            Mega Nav
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/sls_meganav_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            SPACE LAUNCH SYSTEM
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/united-launch-alliance.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            UNITED LAUNCH ALLIANCE
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/bcss_70x52.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            BOEING COMMERCIAL SATELITE
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row className="align-items-center mb-2">
                        <Col sm={4}>
                            <img src="https://www.boeing.com/resources/boeingdotcom/nav/space/gps.jpg" alt="" />
                        </Col>
                        <Col sm={8}>
                            GLOBAL POSITION SYSTEM
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Space;