import React, { InputHTMLAttributes } from 'react';
import * as SC from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: number;
}

export const Input: React.FC<IInputProps> = ({
    width,
    ...props
}) => {
    return(
        <SC.Input
            width={width}
            {...props}
        />
    );
}
