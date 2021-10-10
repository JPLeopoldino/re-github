import React, { useEffect } from 'react';
import * as SC from './styles';

import { useUser } from '../../hooks/user';

const Home = () => {

    const { getUserInfo, userData } = useUser();

    useEffect(() => {
        getUserInfo()
    }, [getUserInfo])

    return(
        <SC.Container>
            <SC.Title>Home</SC.Title>
            <SC.UserInfoContainer>
                <SC.UserAvatar src={userData.avatar_url} />
                <SC.UserName>{userData.name}</SC.UserName>
                <SC.UserName>{userData.login}</SC.UserName>
                <SC.UserName>{userData.location}</SC.UserName>
                <SC.UserName>{userData.company}</SC.UserName>
                <SC.UserName></SC.UserName>
                <SC.UserName>{`Member since: ${userData.created_at.substr(0, 4)}`}</SC.UserName>
            </SC.UserInfoContainer>
        </SC.Container>
    )
}

export default Home;
