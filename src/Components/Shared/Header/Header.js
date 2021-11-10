import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="">AR</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/review">Review</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>

                    <Navbar.Text>
                        {user?.displayName && <>Signed in as: {user?.displayName}</>}
                    </Navbar.Text>

                    {user.email ? <Button onClick={logOut}> Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;