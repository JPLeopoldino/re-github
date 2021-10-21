import React from 'react';
import * as SC from './styles';

import { useTheme } from '../../hooks/theme';
import { Card } from '../Cards';

interface IModalProps {
    close(): void;
    redirect(): void;
}

export const Modal: React.FC<IModalProps> = ({ close, redirect }) => {

    const { theme, toggleTheme, colorScheme } = useTheme();

    return(
        <SC.Container>
            <SC.CardContainer
                height={20}
                width={18}
                theme={colorScheme}
            >
                <SC.CloseButton
                    onClick={close}
                    theme={colorScheme}
                >
                    Close Modal
                </SC.CloseButton>
                <SC.Title theme={colorScheme}>
                    Settings
                </SC.Title>
                <SC.Button
                    onClick={toggleTheme}
                    theme={colorScheme}
                >
                    {
                        theme === 'dark'
                        ? <SC.DarkIcon theme={colorScheme}/>
                        : <SC.LightIcon theme={colorScheme}/>
                    }
                    <SC.BoldText theme={colorScheme}>Change Theme</SC.BoldText>
                </SC.Button>
                <SC.Button
                    onClick={redirect}
                    theme={colorScheme}
                >
                    <SC.LogoutIcon theme={colorScheme}/>
                    <SC.BoldText theme={colorScheme}>Logout</SC.BoldText>
                </SC.Button>
            </SC.CardContainer>
        </SC.Container>
    )
}
