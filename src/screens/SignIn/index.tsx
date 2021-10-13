import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { useSearch } from '../../hooks/search';
import { useUser } from '../../hooks/user';

import * as SC from './styles';

const SingIn = () => {

    const [redirect, setRedirect] = useState(false);

    const { handleUserLogonChange } = useUser();
    // const { searchUser, userResultData } = useSearch();

    const handleSingIn = useCallback(() => {
        setRedirect(!redirect)
    }, [redirect])

    return (
        <>
            {
            redirect
                ? <Redirect to="/home" />
                : <SC.Container>
                    <SC.Title>Re-GitHub</SC.Title>
                    <SC.UserInfoContainer onSubmit={handleSingIn}>
                        <SC.Title>SingIn</SC.Title>
                        <SC.Input type="text" onChange={event => handleUserLogonChange(event.target.value)} />
                        <SC.Button type="submit">Login</SC.Button>
                    </SC.UserInfoContainer>
                </SC.Container>
            }
        </>
    );
}

export default SingIn;
