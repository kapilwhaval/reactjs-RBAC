import React from 'react';
import Header from '../../components/header';

export default (props) => {

    const { read, create, remove, edit } = props;

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                You have following permission on users module
                {read ? <span>Read Users</span> : null}
                {create ? <span>Create User</span> : null}
                {remove ? <span>Delete User</span> : null}
                {edit ? <span>Edit User</span> : null}
            </div>
        </div>
    );
}