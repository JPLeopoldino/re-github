import React from 'react';
import * as SC from './styles';

import { useTheme } from '../../hooks/theme';
import { Card } from '../Cards';

interface IModalProps {
    close(): void;
    redirect(): void;
}

export const Modal: React.FC<IModalProps> = ({ close, redirect }) => {

    const { theme, toggleTheme } = useTheme();

    return(
        <SC.Container
            theme={theme}
        >
            <SC.CardContainer
                height={20}
                width={18}
            >
                <SC.CloseButton onClick={close}>
                    Close Modal
                </SC.CloseButton>
                <SC.Title>Settings</SC.Title>
                <SC.Button onClick={toggleTheme}>
                    {
                        theme === 'dark'
                        ? <SC.DarkIcon/>
                        : <SC.LightIcon/>
                    }
                    <SC.BoldText>Change Theme</SC.BoldText>
                </SC.Button>
                <SC.Button onClick={redirect}>
                    <SC.LogoutIcon/>
                    <SC.BoldText>Logout</SC.BoldText>
                </SC.Button>
            </SC.CardContainer>
        </SC.Container>
    )
}
