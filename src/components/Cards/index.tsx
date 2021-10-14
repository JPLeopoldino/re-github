import React, { FormHTMLAttributes } from 'react';

import * as SC from './styles';
import { ReposData } from '../../hooks/user'

interface ICardProps {
    width?: number;
    height?: number;
    data?: { reposData: ReposData[]; reposLanguagesData: Object; };
}

type IFormCardProps = FormHTMLAttributes<HTMLFormElement> & {
    width?: number;
    height?: number;
}

const getRandomIntInclusive = () => {
    const min = Math.ceil(1);
    const max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Card: React.FC<ICardProps> = ({
    children,
    width,
    height
}) => {
    return(
        <SC.MainCardContainer
            width={width}
            height={height}
        >
            {children}
        </SC.MainCardContainer>
    )
}

export const ReposCard: React.FC<ICardProps> = ({
    width,
    height,
    data
}) => {
    return(
        <SC.MainReposCardContainer
            width={width}
            height={height}
        >
            {
                // children
                data?.reposData.map((item, index) => {
                    return(
                        <SC.RepoRow
                            key={index}
                            href={item.html_url}
                            target="_blank"
                            background={getRandomIntInclusive()}
                        >
                            <SC.UserName>{item.name}</SC.UserName>
                            <SC.UserName>
                                {data?.reposLanguagesData.toString}
                            </SC.UserName>
                        </SC.RepoRow>
                    )
                })
            }
        </SC.MainReposCardContainer>
    )
}

export const FormCard: React.FC<IFormCardProps> = 
({
    children,
    width,
    height,
    ...rest
}) => {
    return(
        <SC.MainFormCardContainer
            width={width}
            height={height}
            {...rest}
        >
            {children}
        </SC.MainFormCardContainer>
    )
}