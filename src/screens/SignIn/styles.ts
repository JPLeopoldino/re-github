import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(13,9,24);
    box-shadow: inset 0 0 8em rgba(0, 0, 0, 1);
`;

export const Title = styled.h1`
    color: ${props => props.theme.font};
    font-size: 42px;
    margin-bottom: 0.5em;
    z-index: 99;
`;

export const Button = styled.button`
    padding: 10px 40px;
    background-color: ${props => props.theme.boxBackground};
    outline: 1px solid ${props => props.theme.outline};
    z-index: 99;
    border-radius: 24px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    border: none;

    &:hover{
        box-shadow: inset 0 0 3em ${props => props.theme.boxHover};
        outline: 2px solid ${props => props.theme.outline};
        background-color: rgba(27, 23, 50, 0.1);
    }
    &:focus{
        box-shadow: inset 0 0 3em ${props => props.theme.boxHover};
        background-color: rgba(27, 23, 50, 0.1);
    }

    &:active{
        box-shadow: inset 0 0 3em ${props => props.theme.boxActive};
    }
`;
