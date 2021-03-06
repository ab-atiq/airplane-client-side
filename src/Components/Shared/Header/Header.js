import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar style={{ marginTop: "-25px" }} bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand style={{ fontSize: '30px' }} href="">AR</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/review">Review</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/purchase">Purchase</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/explore">Explore</Nav.Link>

                        <Navbar.Text>
                            {user?.displayName && <>Signed in as: {user?.displayName}</>}
                        </Navbar.Text>

                        {user.email ? 
                            <Box className='d-flex'>
                                <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Button style={{ fontSize: '20px' }} onClick={logOut}> Logout</Button>
                            </Box>
                            :
                            <Nav.Link style={{ fontSize: '20px' }} as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;