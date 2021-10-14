import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { useSearch } from '../../hooks/search';
import { useUser } from '../../hooks/user';

import { FormCard } from '../../components/Cards';

import * as SC from './styles';


const SingIn: React.FC = () => {

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
                    <FormCard
                        onSubmit={handleSingIn}
                        width={20}
                        height={28}
                    >
                        <SC.Title>SingIn</SC.Title>
                        <SC.Input type="text" onChange={event => handleUserLogonChange(event.target.value)} />
                        <SC.Button type="submit">Login</SC.Button>
                    </FormCard>
                    <SC.Icon/>
                </SC.Container>
            }
        </>
    );
}

export default SingIn;
