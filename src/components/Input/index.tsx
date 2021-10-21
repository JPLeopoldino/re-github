import React, { InputHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/theme';
import * as SC from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: number;
}

export const Input: React.FC<IInputProps> = ({
    width,
    ...props
}) => {

    const { colorScheme } = useTheme();

    return(
        <SC.Input
            width={width}
            {...props}
            theme={colorScheme}
        />
    );
}
