import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as SC from './styles';

import { useUser } from '../../hooks/user';
import { FormCard } from '../../components/Cards';
import { Input } from '../../components/Input';
import { Background } from '../../components/Background';

const SingIn: React.FC = () => {

    const { handleUserLogonChange } = useUser();
    const [redirect, setRedirect] = useState(false);

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
                        <Input
                            type="text"
                            placeholder="GitHub username"
                            onChange={event => handleUserLogonChange(event.target.value)}
                        />
                        <SC.Button type="submit">Login</SC.Button>
                    </FormCard>
                    <Background/>
                </SC.Container>
            }
        </>
    );
}

export default SingIn;
