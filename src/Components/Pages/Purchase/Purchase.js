import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>This is Purchase section.</h1>
            <form>
                <input type="text" placeholder={user.displayName} />
                <input type="email" placeholder={user.email} />
                <input type="password" placeholder='Password' />
                <input type="number" placeholder='Phone Number' />
                <textarea name="Address" placeholder="Give your details Information" id="" cols="10" rows="5"></textarea>
                <input style={{ width: '80px' }} className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Purchase;