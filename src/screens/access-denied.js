import React from 'react';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Header from '../components/header';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default () => {

    return (
        <div>
            <Header />
            <center className="pt-5">
                <Avatar style={{ backgroundColor: 'red' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Access Denied</Typography>
            </center >
        </div>
    );
}