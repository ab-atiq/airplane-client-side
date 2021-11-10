import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Carousel variant="dark">
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src="https://www.boeing.com/resources/boeingdotcom/commercial/787/assets/images/marquee-2019.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <Row>
                                <Col className='py-5 my-5'>
                                    <div className='mb-5 pb-5 text-start' >
                                        {/* <h3>INSPIRING BETTER HEALTH</h3>
                                        <h1 className='text-primary'>Healthy heart,healthy family</h1>
                                        <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p> */}
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mb-5'>
                                        <h1> </h1>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src="https://www.boeing.com/resources/boeingdotcom/commercial/737ng/assets/images/marquee.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <Row>
                                <Col className='py-5 my-5'>
                                    <div className='mb-5 pb-5 text-start' >
                                        {/* <h2>GROWING TO MEET YOUR NEEDS</h2>
                                        <h1 className="text-primary">Your wealth,is your health</h1>
                                        <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.</p> */}
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mb-5'>
                                        <h1> </h1>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://www.boeing.com/resources/boeingdotcom/commercial/777x/assets/images/marquee-777x-in-air.jpg" alt="Third slide" />
                        <Carousel.Caption className='' style={{ display: 'flex' }}>
                            <Row>
                                <Col>
                                    <div className='mb-5'>
                                        <h1> </h1>
                                    </div>
                                </Col>
                                <Col className='py-5 my-5'>
                                    <div className='mb-5 p-5 text-end' >
                                        {/* <h2>THE RIGHT PEDIATRICIAN</h2>
                                        <h1 className="text-primary">Your wealth,is your health</h1>
                                        <p>We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p> */}
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Category></Category>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;