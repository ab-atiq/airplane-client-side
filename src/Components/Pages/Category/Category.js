import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Commercial from './Commercial/Commercial';
import Defence from './Defense/Defence';
import Space from './Space/Space';

const Category = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Commercial></Commercial>
                </Col>
                <Col xs={6} md={4}>
                    <Defence></Defence>
                </Col>
                <Col xs={6} md={4}>
                    <Space></Space>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;