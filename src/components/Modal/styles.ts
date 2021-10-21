import styled, {css} from 'styled-components';
import {
    FiLogOut,
    FiSun,
    FiMoon,
    FiX,
} from "react-icons/fi";

interface CardDimensions {
    width?: number;
    height?: number;
}

export const Container = styled.div`
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
    background: ${props => props.theme.card};
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.outline};
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
    color: ${props => props.theme.font};
    font-size: 3rem;
    border-radius: 10px;
    transition: 0.4s ease;
    z-index: 99999;
    box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.1);

    &:hover{
        box-shadow: inset 0 0 3em ${props => props.theme.boxHover};
    }

    &:active{
        box-shadow: inset 0 0 3em ${props => props.theme.boxActive};
    }
`;

export const Title = styled.h3`
    position: absolute;
    top: 0.7rem;
    font-size: 26px;
    color: ${props => props.theme.font};
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
    background-color: ${props => props.theme.box};
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;
    outline: none;
    border: none;

    &:hover{
        background-color: ${props => props.theme.boxHover};
    }
    &:active{
        background-color: ${props => props.theme.boxActive};
    }
`;

export const BoldText = styled.b`
    font-size: 16px;
    color: ${props => props.theme.font};
    letter-spacing: .5px;
`;

export const LightIcon = styled(FiSun)`
    font-size: 24px;
    color: ${props => props.theme.font};
`;

export const DarkIcon = styled(FiMoon)`
    font-size: 24px;
    color: ${props => props.theme.font};
`;

export const LogoutIcon = styled(FiLogOut)`
font-size: 24px;
color: ${props => props.theme.font};
`;
