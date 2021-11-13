import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageProducts from './ManageProducts/ManageProducts';
import AddAProduct from './AddAProduct/AddAProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from './AdminRoute/AdminRoute';
import Button from '@restart/ui/esm/Button';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import AddReview from '../AddReview/AddReview';
import Explore from '../Explore/Explore';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/home">Home</Link><br />
            
            {admin ?
                <Box>
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/makeAdmin`}>Make Admin</Link><br />
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/addAProduct`}>Add a Product</Link><br />
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/manageProducts`}>Manage Products</Link><br />
                    <Button className='btn btn-primary' style={{ fontSize: '20px', marginTop: '20px' }} onClick={logOut}> Logout</Button>
                </Box>
                :
                <Box>
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/pay`}>Pay</Link><br />
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/myOrders`}>My Orders</Link><br />
                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} to={`${url}/addReview`}>Add Review</Link><br />
                    <Button className='btn btn-primary' style={{ fontSize: '20px', marginTop: '20px' }} onClick={logOut}> Logout</Button>
                </Box>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" noWrap component="div" className="mx-auto">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Switch>
                    <Route exact path={path}>
                        <Explore></Explore>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
