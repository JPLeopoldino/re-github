import styled, {css} from 'styled-components';
import { BiGitRepoForked } from "react-icons/bi";
import {
    FiArrowLeft,
    FiLogOut,
    FiSettings,
    FiUsers,
    FiStar,
    FiBriefcase,
    FiMapPin,
    FiMail,
    FiGlobe,
    FiGithub,
    FiTwitter,
    FiSun,
    FiMoon,

    FiBookOpen,
    FiBook,
    FiLayout,
    FiBox,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

interface CardDimensions {
    width?: number;
    height?: number;
}

interface CardStyles {
    background?: number;
}

interface Language {
    language?: string;
}

export const MainCardContainer = styled.div<CardDimensions>`
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
    z-index: 99;
    backdrop-filter: saturate(180%) blur(10px);
    position: relative;
    padding: 1rem 2.5rem;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 18px;
    }
`;

export const MainReposCardContainer = styled.div<CardDimensions>`
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
    backdrop-filter: saturate(180%) blur(10px);
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 10px;
    border: 1px solid #90a0d1;
    z-index: 99;
    /* backdrop-filter: blur(24px); */
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 1rem 2.5rem;

    /* &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 18px;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
        z-index: 9999;
        background: linear-gradient(180deg, transparent 30%, rgba(144, 160, 209, 0.90) 150%);
    } */

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.15);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #90a0d1;        
        border-radius: 24px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #FFF;
    }
`;

export const MainFormCardContainer = styled.form<CardDimensions>`
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
    /* box-shadow: 0 0 2em rgba(0, 0, 0, 0.3); */
    box-shadow: 0 0 2em rgba(144, 160, 209, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    border: 1px solid #90a0d1;
    z-index: 99;
    backdrop-filter: saturate(180%) blur(5px);
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 10px;
    }
`;

export const RepoRow = styled.a<CardStyles>`
    min-height: 6.3rem !important;
    width: 100%;
    z-index: 99;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    border: 1px solid #90a0d1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    margin: 8px 0px;
    text-decoration: none;
    transition: 0.2s ease;
    transition-property: box-shadow, outline;
    background: rgba(27, 23, 50, 0.3);
    padding: 0.8rem 1rem;

    &:hover{
        box-shadow: inset 0 0 4em rgba(144, 160, 209, 0.2);
        outline: 1.5px solid #90a0d1;
        background-color: rgba(27, 23, 50, 0.1);
    }

    &:active{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.5);
    }
`;

export const BottomRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

export const PathText = styled.p`
    color: #90a0d1;
    font-size: 12px;
    font-style: italic;
`;

export const ForkIcon = styled(BiGitRepoForked)`
    color: #FFF;
    font-size: 16px;
`;

export const StarIcon = styled(FiStar)`
    color: #FFF;
`;

export const LanguagesText = styled.p<Language>`
    color: #000;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    padding: 0.2rem 0.4rem;

    ${props => {
        switch (props.language) {
            case "JavaScript":
                return(
                css`
                    color: #000;
                    background-color: #F7DF1E;
                `);
            case 'CSS':
                return(
                css`
                    color: #FFF;
                    background-color: #1572B6;
                `);
            case 'HTML':
                return(
                css`
                    color: #000;
                    background-color: #E34F26;
                `);
            case 'TypeScript':
                return(
                css`
                    color: #000;
                    background-color: #3178C6;
                `);
            case 'Dart':
                return(
                css`
                    color: #FFF;
                    background-color: #0175C2;
                `);
            case 'Python':
                return(
                css`
                    color: #FFF;
                    background-color: #3776AB;
                `);
            case 'C#':
                return(
                css`
                    color: #FFF;
                    background-color: #512BD4;
                `);
            case 'Ruby':
                return(
                css`
                    color: #FFF;
                    background-color: #CC342D;
                `);
            case 'CoffeeScript':
                return(
                css`
                    color: #FFF;
                    background-color: #2F2625;
                `);
            case 'Go':
                return(
                css`
                    color: #000;
                    background-color: #00ADD8;
                `);
            case 'PHP':
                return(
                css`
                    color: #000;
                    background-color: #777BB4;
                `);
            case 'C++':
                return(
                css`
                    color: #FFF;
                    background-color: #00599C;
                `);
            case 'Standard ML':
                return(
                css`
                    color: #000;
                    background-color: #DC566D;
                `);
            case 'Shell':
                return(
                css`
                    color: #000;
                    background-color: #89E051;
                `);
            case 'Blade':
                return(
                css`
                    color: #000;
                    background-color: #F7523F;
                `);
        }
 }};
`;

export const BoldText = styled.p`
    color: #FFF;
    font-size: 24px;
    font-weight: bold;
`;

export const Text = styled.p`
    color: #FFF;
    font-size: 12px;
    font-weight: bold;
`;

//============================================================

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
    /* background-color: #17102D; */
    background: rgb(13,9,24);
    background: linear-gradient(0deg, rgba(13,9,24,1) 0%, rgba(25,17,51,1) 100%);
    box-shadow: inset 0 0 8em rgba(0, 0, 0, 1);
    z-index: 0;
    /* background-color: #0d0f17; */

    /* &::after{
        content: '';
        position: absolute;
        top: -50px;
        left: -50px;
        width: 800px;
        height: 800px;
        border-radius: 100%;
        background: rgb(18,11,129);
        background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%);
    }

    &::before{
        content: '';
        position: absolute;
        top: 50px;
        right: -50px;
        width: 1200px;
        height: 1200px;
        border-radius: 100%;
        background: rgb(18,11,129);
        background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%);
    } */
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: 24px;
    z-index: 99;
`;

export const UserInfoContainer = styled.div`
    width: 25rem;
    height: 80rem;
    overflow: hidden;
    overflow-y: scroll;
    /* background:  #1B1732; */
    background: rgba(27, 23, 50, 0.75);
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    /* background: rgb(18,11,129);
    background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid #90a0d1;
    z-index: 99;
    backdrop-filter: blur(24px);
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
    }
`;

export const LinkContainer = styled.a`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserAvatar = styled.img`
    width: 100%;
    height: auto;
    border-radius: 100%;
    border: 2px solid #90a0d1;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    margin: 0;
`;

export const FollowersRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.8rem;
    border-radius: 8px;
    background-color: rgba(144, 160, 209, 0.11);
`;

export const RowClean = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
`;

export const UserRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.5rem 0.9rem;
    border-radius: 6px;
    background-color: rgba(144, 160, 209, 0.11);
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

export const LinkRow = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.5rem 0.9rem;
    border-radius: 6px;
    background-color: rgba(144, 160, 209, 0.11);
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover{
        background-color: rgba(144, 160, 209, 0.2);
    }
    &:active{
        background-color: rgba(144, 160, 209, 0.5);
    }
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
    background-color: rgba(144, 160, 209, 0.11);
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover{
        background-color: rgba(144, 160, 209, 0.2);
    }
    &:active{
        background-color: rgba(144, 160, 209, 0.5);
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
    background-color: rgba(144, 160, 209, 0.35);
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:active{
        background-color: rgba(144, 160, 209, 0.5);
    }
`;

export const UserLinkRow = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    align-self: start;
    gap: 8px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    background-color: rgba(144, 160, 209, 0.11);
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover{
        background-color: rgba(144, 160, 209, 0.2);
    }
    &:active{
        background-color: rgba(144, 160, 209, 0.5);
    }
`;

export const Divider = styled.span`
    width: 100%;
    height: 1px;
    border-radius: 100%;
    background-color: #90a0d1;
    margin: 0;
`;


export const UserBoldText = styled.b`
    color: ${props => props.theme.font};
`;

export const UserText = styled.p`
    color: ${props => props.theme.font};
`;

export const LinkText = styled.a`
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
    z-index: 99;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover{
        color: #90a0d1;
    }
    &:active{
        color: #FFF;
    }
`;

export const UserName = styled.p`
    color: ${props => props.theme.font};
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
`;

export const UserLogin = styled.p`
    color: #FFF;
    font-size: 18px;
    margin: 0;
`;

export const Settings = styled(FiSettings)`
    position: absolute;
    top: 0;
    left: 0;
    padding: 14px;
    cursor: pointer;
    color: #FFF;
    font-size: 3rem;
    border-radius: 18px;
    transition: 0.4s ease;
    z-index: 99999;

    &:hover{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.05);
    }

    &:active{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.5);
    }
`;

export const QuoteIcon = styled(FaQuoteLeft)`
    font-size: 13px;
    color: ${props => props.theme.font};
`;

export const UsersIcon = styled(FiUsers)`
    color: ${props => props.theme.font};
`;

export const CompanyIcon = styled(FiBriefcase)`
    color: ${props => props.theme.font};
`;

export const LocationIcon = styled(FiMapPin)`
    color: ${props => props.theme.font};
`;

export const EmailIcon = styled(FiMail)`
    color: ${props => props.theme.font};
`;

export const BlogIcon = styled(FiGlobe)`
    color: ${props => props.theme.font};
`;

export const GitIcon = styled(FiGithub)`
    color: ${props => props.theme.font};
`;

export const TwitterIcon = styled(FiTwitter)`
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


export const SvgBG = styled.svg`
    aspect-ratio: 960/540;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    position: absolute;
    filter: opacity(60%) blur(1px);
`;

export const Input = styled.input`
    width: 95%;
    padding: 15px 30px;
    background-color: rgba(27, 23, 50, 0.3);
    outline: 1px solid #90a0d1;
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
        color: #90a0d1;
        font-weight: normal;
    }

    &:focus{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.2);
        background-color: rgba(27, 23, 50, 0.1);
        outline: 2px solid #90a0d1;
    }
    &:focus::placeholder{
        /* font-weight: bold; */
    }
`;
