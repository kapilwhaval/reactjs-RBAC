import React from 'react';
import Header from '../../components/header';

export default (props) => {

    const { read, create, remove, edit } = props;

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                You have following permission on roles module
                {read ? <span>Read Roles</span> : null}
                {create ? <span>Create Role</span> : null}
                {remove ? <span>Delete Role</span> : null}
                {edit ? <span>Edit Role</span> : null}
            </div>
        </div>
    );
}