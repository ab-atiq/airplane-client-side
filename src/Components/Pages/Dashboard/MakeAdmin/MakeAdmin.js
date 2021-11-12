import { Alert, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,setSuccess]=useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleOnSubmit = e => {
        const user = { email };
        fetch('https://stormy-everglades-33424.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <Container >
            <Box sx={{ width: '50%', margin: '0 auto' }}>
                <h1>Please add new Admin</h1>
                <form onSubmit={handleOnSubmit} className='d-flex'>
                    <TextField label="Email" type='email' onBlur={handleOnBlur} variant="standard" />
                    <br />
                    <Button type='submit' className='btn btn-primary' >Make Admin</Button>
                </form>
            </Box>
            <br />
            {success && <Alert severity='success'>Made admin successfully!</Alert>}
        </Container>
    );
};

export default MakeAdmin;