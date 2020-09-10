import React, { useState } from 'react';
import {
    AppBar, Drawer, Toolbar, Typography, Button, Divider,
    IconButton, List, ListItem, ListItemText, ListItemIcon
} from '@material-ui/core';
import { Menu, MailOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/actions/user';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(2) },
    title: { flexGrow: 1 },
    list: { width: 250 },
    listTitle: { paddingLeft: 20, paddingTop: 5, paddingBottom: 5 },
    paper: { background: theme.palette.primary.main, color: 'white' },
    icon: { color: 'white' }
}));

const Header = ({ history }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { user } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    const logout = () => {
        history.push('/login');
        dispatch(removeUser())
    }

    const renderDrawerList = () => (
        <div className={classes.list}>
            <div className={classes.listTitle}>
                <Typography variant="h6">RBAC with REACT JS</Typography>
                <span>v1.0</span>
            </div>
            <Divider />
            <List>
                {
                    user.modules.map((module, index) => (
                        <ListItem key={index} onClick={() => history.push(module.modulePageUrl)} button>
                            <ListItemIcon className={classes.icon}><MailOutline /></ListItemIcon>
                            <ListItemText primary={module.moduleName} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>{`Welcome ${user.firstName}`}</Typography>
                    <Button color="inherit" onClick={() => logout()}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.paper }} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {renderDrawerList()}
            </Drawer>
        </div>
    );
}

export default withRouter(Header);