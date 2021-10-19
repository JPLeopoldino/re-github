import styled, {css} from 'styled-components';
import { BiGitRepoForked } from "react-icons/bi";
import { FiStar } from "react-icons/fi";

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
