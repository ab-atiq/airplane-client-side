import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Commercial from './Commercial/Commercial';
import Defence from './Defense/Defence';
import Space from './Space/Space';
import './Category.css'
const Category = () => {
    return (
        <Container>
            <h1 className='text-primary'>Category of Airplane</h1>
            <Row gap={3}>
                <Col xs={12}  md={6}>
                    <Commercial></Commercial>
                </Col>
                <Col xs={12}  md={6}>
                    <Defence></Defence>
                </Col>
                <Col xs={12}  md={6}>
                    <Space></Space>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;