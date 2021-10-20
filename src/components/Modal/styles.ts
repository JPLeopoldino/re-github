import styled, {css} from 'styled-components';
import {
    FiLogOut,
    FiSettings,
    FiSun,
    FiMoon,
    FiX,
} from "react-icons/fi";

interface ITheme {
    theme: string;
}

interface CardDimensions {
    width?: number;
    height?: number;
}

export const Container = styled.div<ITheme>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFF;
`;

export const CardContainer = styled.div<CardDimensions>`
    ${props =>
        props.width !== undefined &&
        css`
        width: ${props.width + 'rem'};
    `};
    ${props =>
        props.height !== undefined &&
        css`
        height: ${props.height + 'rem'};
    `};
    /* background: rgba(27, 23, 50, 0.75); */
    background: linear-gradient(90deg,rgba(255,0,142,.08),rgba(130,87,229,.08));
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    border: 1px solid #90a0d1;
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(10px);
    position: relative;
    padding: 3rem 2.5rem 0.5rem 2.5rem;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 18px;
    }
`;

export const CloseButton = styled(FiX)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 14px;
    cursor: pointer;
    color: #FFF;
    font-size: 3rem;
    border-radius: 10px;
    transition: 0.4s ease;
    z-index: 99999;
    box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.1);

    &:hover{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.2);
    }

    &:active{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.5);
    }
`;

export const Title = styled.h3`
    position: absolute;
    top: 0.7rem;
    
    font-size: 26px;
    color: #FFF;
    letter-spacing: 1.5px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.8rem 1rem;
    border-radius: 6px;
    background-color: rgba(144, 160, 209, 0.11);
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;
    outline: none;
    border: none;

    &:hover{
        background-color: rgba(144, 160, 209, 0.2);
    }
    &:active{
        background-color: rgba(144, 160, 209, 0.5);
    }
`;

export const BoldText = styled.b`
    font-size: 16px;
    color: #FFF;
    letter-spacing: .5px;
`;

export const LightIcon = styled(FiSun)`
    font-size: 24px;
    color: #FFF;
`;

export const DarkIcon = styled(FiMoon)`
    font-size: 24px;
    color: #FFF;
`;

export const LogoutIcon = styled(FiLogOut)`
font-size: 24px;
color: #FFF;
`;
