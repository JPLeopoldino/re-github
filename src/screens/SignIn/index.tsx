import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as SC from './styles';

import { useUser } from '../../hooks/user';
import { FormCard } from '../../components/Cards';
import { Input } from '../../components/Input';
import { Background } from '../../components/Background';
import { useTheme } from '../../hooks/theme';

const SingIn: React.FC = () => {

    const { colorScheme } = useTheme();
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
                    <SC.Title theme={colorScheme}>
                        Re-GitHub
                    </SC.Title>
                    <FormCard
                        onSubmit={handleSingIn}
                        width={20}
                        height={28}
                    >
                        <SC.Title theme={colorScheme}>
                            SingIn
                        </SC.Title>
                        <Input
                            type="text"
                            placeholder="GitHub username"
                            onChange={event => handleUserLogonChange(event.target.value)}
                        />
                        <SC.Button
                            type="submit"
                            theme={colorScheme}
                        >
                            Login
                        </SC.Button>
                    </FormCard>
                    <Background/>
                </SC.Container>
            }
        </>
    );
}

export default SingIn;
