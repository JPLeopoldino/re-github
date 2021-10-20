import React, { FormHTMLAttributes } from 'react';

import * as SC from './styles';
import { ReposData, UserData } from '../../hooks/user'
import { useTheme } from "../../hooks/theme"
interface ICardProps {
    width?: number;
    height?: number;
    data?: { filteredRepos: ReposData[]; reposLanguagesData: Object; };
}

interface IUserCardProps {
    data: UserData;
    redirect?(): void;
    openModal(): void;
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

export const UserCard: React.FC<IUserCardProps> = ({ data, redirect, openModal }) => {
    
    const { colorScheme } = useTheme();
    
    return (
        <Card
            width={25}
            height={50}
        >
            <SC.Settings onClick={openModal} />
            <SC.LinkContainer href="https://github.com/settings/profile" target="_blank" rel="noreferrer">
                <SC.UserAvatar src={data.avatar_url} />
            </SC.LinkContainer>
            <SC.Column>
                <SC.UserName theme={colorScheme}>{data.name}</SC.UserName>
                <SC.UserLinkRow
                    href={data.html_url}
                    target="_blank"
                >
                    <SC.GitIcon theme={colorScheme}/>
                    <SC.UserText theme={colorScheme}>{data.login}</SC.UserText>
                </SC.UserLinkRow>
            </SC.Column>
            <SC.Divider />
            <SC.UserRow>
                <SC.UsersIcon theme={colorScheme}/>
                <SC.UserBoldText theme={colorScheme}>{data.followers}</SC.UserBoldText>
                <SC.UserText theme={colorScheme}>followers · </SC.UserText>
                <SC.UserBoldText theme={colorScheme}>{data.following}</SC.UserBoldText>
                <SC.UserText theme={colorScheme}>following</SC.UserText>
            </SC.UserRow>
            {
                data.bio
                    ? <SC.UserRow>
                        <SC.QuoteIcon theme={colorScheme}/>
                        <SC.UserText theme={colorScheme}>{data.bio}</SC.UserText>
                    </SC.UserRow>
                    : null
            }
            {
                data.company
                    ? <SC.UserRow>
                        <SC.CompanyIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.company}</SC.UserBoldText>
                    </SC.UserRow>
                    : null
            }
            {
                data.location
                    ? <SC.UserRow>
                        <SC.LocationIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.location}</SC.UserBoldText>
                    </SC.UserRow>
                    : null
            }
            {
                data.email
                    ? <SC.LinkRow
                        href={`mailto:${data.email}`}
                        target="_blank"
                    >
                        <SC.EmailIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.email}</SC.UserBoldText>
                    </SC.LinkRow>
                    : null
            }
            {
                data.blog
                    ? <SC.LinkRow
                        href={data.blog}
                        target="_blank"
                    >
                        <SC.BlogIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.blog}</SC.UserBoldText>
                    </SC.LinkRow>
                    : null
            }
            {
                data.twitter_username
                    ? <SC.LinkRow
                        href={`https://twitter.com/${data.twitter_username}`}
                        target="_blank"
                    >
                        <SC.TwitterIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.twitter_username}</SC.UserBoldText>
                    </SC.LinkRow>
                    : null
            }
            <SC.UserText theme={colorScheme}>{`Member since: ${data.created_at.substr(0, 4)}`}</SC.UserText>
        </Card>
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