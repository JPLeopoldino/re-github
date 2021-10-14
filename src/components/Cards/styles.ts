import styled, {css} from 'styled-components';

interface CardDimensions {
    width?: number;
    height?: number;
}

interface CardStyles {
    background?: number;
}

export const MainCardContainer = styled.div<CardDimensions>`
    ${props =>
        props.width != undefined &&
        css`
        width: ${props.width + 'rem'};
    `};
    ${props =>
        props.height != undefined &&
        css`
        height: ${props.height + 'rem'};
    `};
    background: rgba(27, 23, 50, 0.75);
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid #90a0d1;
    z-index: 99;
    backdrop-filter: saturate(180%) blur(20px);
    position: relative;

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
        props.width != undefined &&
        css`
        width: ${props.width + 'rem'};
    `};
    ${props =>
        props.height != undefined &&
        css`
        height: ${props.height + 'rem'};
    `};
    background: rgba(27, 23, 50, 0.75);
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid #90a0d1;
    z-index: 99;
    backdrop-filter: blur(24px);
    position: relative;
    overflow-y: scroll;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 18px;
    }
`;

export const MainFormCardContainer = styled.form<CardDimensions>`
    ${props =>
        props.width != undefined &&
        css`
        width: ${props.width + 'rem'};
    `};
    ${props =>
        props.height != undefined &&
        css`
        height: ${props.height + 'rem'};
    `};
    /* background: rgba(27, 23, 50, 0.75); */
    background: linear-gradient(90deg,rgba(255,0,142,.08),rgba(130,87,229,.28));
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid #90a0d1;
    z-index: 99;
    backdrop-filter: saturate(180%) blur(10px);
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
        border-radius: 18px;
    }
`;

export const RepoRow = styled.a<CardStyles>`
    z-index: 99;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    border: 1px solid #90a0d1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    cursor: pointer;
    user-select: none;
    padding: 0px 12px;
    margin: 8px 0px;
    text-decoration: none;
    width: 90%;
    transition: 0.8s ease;
    transition-property: box-shadow, outline;
    
    ${props => {
        switch (props.background) {
            case 1:
                return(
                css`
                    /* background: rgb(10,6,89); */
                    background: linear-gradient(90deg, rgba(3,108,142,0.2) 0%, rgba(10,6,89,0.2) 100%);
                `);
            case 2:
                return(
                css`
                    /* background: rgb(0,52,205); */
                    background: linear-gradient(90deg, rgba(0,52,205,0.2) 0%, rgba(117,3,142,0.2) 100%);
                `);
            case 3:
                return(
                css`
                    /* background: rgb(205,106,0); */
                    background: linear-gradient(90deg, rgba(205,106,0,0.2) 0%, rgba(142,3,87,0.2) 100%);
                `);
            case 4:
                return(
                css`
                    /* background: rgb(0,205,172); */
                    background: linear-gradient(90deg, rgba(0,205,172,0.2) 0%, rgba(57,142,3,0.2) 100%);
                `);
            case 5:
                return(
                css`
                    /* background: rgb(205,0,200); */
                    background: linear-gradient(90deg, rgba(205,0,200,0.2) 0%, rgba(3,142,136,0.2) 100%);
                `);
            case 6:
                return(
                css`
                    /* background: rgb(205,0,0); */
                    background: linear-gradient(90deg, rgba(205,0,0,0.2) 0%, rgba(15,142,3,0.2) 100%);
                `);
            case 7:
                return(
                css`
                    /* background: rgb(92,0,205); */
                    background: linear-gradient(90deg, rgba(92,0,205,0.2) 0%, rgba(142,112,3,0.2) 100%);
                `);
            case 8:
                return(
                css`
                    /* background: rgb(0,18,205); */
                    background: linear-gradient(90deg, rgba(0,18,205,0.2) 0%, rgba(142,108,3,0.2) 100%);
                `);
            // default:
            //     return(
            //     css`
            //         background: rgba(27, 23, 50, 0.75);;
            //     `)
        }
     }};

    
    /* background: rgba(27, 23, 50, 0.75); */
    

    &:hover{
        box-shadow: inset 0 0 4em rgba(144, 160, 209, 0.2);
        outline: 1.5px solid #90a0d1;
        background-color: rgba(27, 23, 50, 0.1);
    }

    &:active{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.5);
    }
`;

export const UserName = styled.p`
    color: #FFF;
    font-size: 18px;
`;
