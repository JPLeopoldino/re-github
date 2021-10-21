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

export const Card: React.FC<ICardProps> = ({
    children,
    width,
    height
}) => {

    const { colorScheme } = useTheme();

    return(
        <SC.MainCardContainer
            width={width}
            height={height}
            theme={colorScheme}
        >
            {children}
        </SC.MainCardContainer>
    );
}

export const UserCard: React.FC<IUserCardProps> = ({
    data,
    openModal
}) => {
    
    const { colorScheme } = useTheme();
    
    return (
        <Card
            width={25}
            height={50}
        >
            <SC.Settings
                onClick={openModal}
                theme={colorScheme}
            />
            <SC.LinkContainer href="https://github.com/settings/profile" target="_blank" rel="noreferrer">
                <SC.UserAvatar
                    src={data.avatar_url}
                    theme={colorScheme}
                />
            </SC.LinkContainer>
            <SC.Column>
                <SC.UserName theme={colorScheme}>{data.name}</SC.UserName>
                <SC.UserLinkRow
                    href={data.html_url}
                    target="_blank"
                    theme={colorScheme}
                >
                    <SC.GitIcon theme={colorScheme}/>
                    <SC.UserText theme={colorScheme}>{data.login}</SC.UserText>
                </SC.UserLinkRow>
            </SC.Column>
            <SC.Divider theme={colorScheme}/>
            <SC.UserRow theme={colorScheme}>
                <SC.UsersIcon theme={colorScheme}/>
                <SC.UserBoldText theme={colorScheme}>{data.followers}</SC.UserBoldText>
                <SC.UserText theme={colorScheme}>followers · </SC.UserText>
                <SC.UserBoldText theme={colorScheme}>{data.following}</SC.UserBoldText>
                <SC.UserText theme={colorScheme}>following</SC.UserText>
            </SC.UserRow>
            {
                data.bio
                    ? <SC.UserRow theme={colorScheme}>
                        <SC.QuoteIcon theme={colorScheme}/>
                        <SC.UserText theme={colorScheme}>{data.bio}</SC.UserText>
                    </SC.UserRow>
                    : null
            }
            {
                data.company
                    ? <SC.UserRow theme={colorScheme}>
                        <SC.CompanyIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.company}</SC.UserBoldText>
                    </SC.UserRow>
                    : null
            }
            {
                data.location
                    ? <SC.UserRow theme={colorScheme}>
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
                        theme={colorScheme}
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
                        theme={colorScheme}
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
                        theme={colorScheme}
                    >
                        <SC.TwitterIcon theme={colorScheme}/>
                        <SC.UserBoldText theme={colorScheme}>{data.twitter_username}</SC.UserBoldText>
                    </SC.LinkRow>
                    : null
            }
            {/* <SC.UserText theme={colorScheme}>{`Member since: ${data.created_at.substr(0, 4)}`}</SC.UserText> */}
        </Card>
    );
}

export const ReposCard: React.FC<ICardProps> = ({
    width,
    height,
    data
}) => {

    const { colorScheme } = useTheme();

    return(
        <SC.MainReposCardContainer
            width={width}
            height={height}
            theme={colorScheme}
        >
            {
                data?.filteredRepos.map((item, index) => {
                    return(
                        <SC.RepoRow
                            key={index}
                            href={item.html_url}
                            target="_blank"
                            theme={colorScheme}
                        >
                            <SC.PathText theme={colorScheme}>
                                {item.owner.html_url.split("//").pop()}/
                            </SC.PathText>
                            <SC.BoldText
                                theme={colorScheme}
                            >
                                {item.name}
                            </SC.BoldText>
                            <SC.BottomRow>
                                <SC.Row>
                                    <SC.ForkIcon theme={colorScheme}/>
                                    <SC.Text theme={colorScheme}>
                                        {item.forks_count}
                                    </SC.Text>
                                    <SC.StarIcon theme={colorScheme}/>
                                    <SC.Text theme={colorScheme}>
                                        {item.stargazers_count}
                                    </SC.Text>
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
    );
}

export const FormCard: React.FC<IFormCardProps> = 
({
    children,
    width,
    height,
    ...rest
}) => {

    const { colorScheme } = useTheme();

    return(
        <SC.MainFormCardContainer
            width={width}
            height={height}
            theme={colorScheme}
            {...rest}
        >
            {children}
        </SC.MainFormCardContainer>
    );
}
