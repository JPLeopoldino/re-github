import React, { FormHTMLAttributes } from 'react';

import * as SC from './styles';
import { ReposData } from '../../hooks/user'

interface ICardProps {
    width?: number;
    height?: number;
    data?: { filteredRepos: ReposData[]; reposLanguagesData: Object; };
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
                data?.filteredRepos.map((item, index) => {
                    return(
                        <SC.RepoRow
                            key={index}
                            href={item.html_url}
                            target="_blank"
                            background={getRandomIntInclusive()}
                        >
                            <SC.PathText>{item.owner.html_url.split("//").pop()}/</SC.PathText>
                            <SC.BoldText>{item.name}</SC.BoldText>
                            <SC.BottomRow>
                                <SC.Row>
                                    <SC.ForkIcon/>
                                    <SC.Text>{item.forks_count}</SC.Text>
                                    <SC.StarIcon/>
                                    <SC.Text>{item.stargazers_count}</SC.Text>
                                </SC.Row>
                                <SC.LanguagesText
                                    language={item.language}
                                >
                                    {item.language}
                                </SC.LanguagesText>
                            </SC.BottomRow>
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