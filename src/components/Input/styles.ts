import styled, {css} from 'styled-components';

interface InputDimensions {
    width?: number;
}

export const Input = styled.input<InputDimensions>`
    ${props =>
        props.width !== undefined &&
        css`
        width: ${props.width + '%'};
    `};
    padding: 10px 30px;
    background-color: ${props => props.theme.boxBackground};
    outline: 1px solid ${props => props.theme.outline};
    z-index: 99;
    border-radius: 24px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    transition: 0.2s ease;
    box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;
    margin-top: 10px;

    ::placeholder{
        color: ${props => props.theme.outline};
        font-weight: normal;
    }

    &:focus{
        box-shadow: inset 0 0 3em ${props => props.theme.box};
        background-color: rgba(27, 23, 50, 0.1);
        outline: 2px solid ${props => props.theme.outline};
    }
`;
