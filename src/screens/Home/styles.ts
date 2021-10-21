import styled from 'styled-components';
import {
    FiBookOpen,
    FiBook,
    FiLayout,
    FiBox,
} from "react-icons/fi";

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.25);
    backdrop-filter: saturate(180%) blur(10px);
    z-index: 99;
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background: rgb(13,9,24);
    background: linear-gradient(0deg, rgba(13,9,24,1) 0%, rgba(25,17,51,1) 100%);
    box-shadow: inset 0 0 8em rgba(0, 0, 0, 1);
    z-index: 0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    margin: 0;
`;

export const SimpleRow = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: center;
    gap: 24px;
    margin: 0;
    padding: 0.5rem 0.9rem;
    border-radius: 6px;
`;

export const LinkTabRow = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.box};
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.boxHover};
    }
    &:active{
        background-color: ${props => props.theme.boxActive};
    }
`;

export const LinkTabRowActive = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.boxActive};
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:active{
        opacity: 70%;
    }
`;

export const BoldText = styled.b`
    color: ${props => props.theme.font};
`;

export const OverviewIcon = styled(FiBookOpen)`
    color: ${props => props.theme.font};
`;

export const RepositoriesIcon = styled(FiBook)`
    color: ${props => props.theme.font};
`;

export const ProjectsIcon = styled(FiLayout)`
    color: ${props => props.theme.font};
`;

export const PackagesIcon = styled(FiBox)`
    color: ${props => props.theme.font};
`;
