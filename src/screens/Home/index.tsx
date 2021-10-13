import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';

import * as SC from './styles';
import { useUser } from '../../hooks/user';
import { Redirect } from 'react-router-dom';

const Home = () => {

    const { getAllUserInfo, userData, reposData, userLogon, loading } = useUser();
    const [redirect, setRedirect] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }

    useEffect(() => {
        const checkHaveUser = () => {
            if(userLogon === ''){
                setRedirect(true)
            } else {
                getAllUserInfo()
                return;
            }
        }
        checkHaveUser();
    }, [getAllUserInfo, userLogon])

    return(
        redirect
        ? <Redirect to="/" />
        : <SC.Container>
            { loading
            ? <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
            : <>
            <SC.UserInfoContainer>
                <SC.Title>Home</SC.Title>
                <SC.ArrowLeft onClick={() => setRedirect(!redirect)} />
                <a href="https://github.com/settings/profile" target="_blank" rel="noreferrer">
                    <SC.UserAvatar src={userData.avatar_url}/>
                </a>
                <SC.UserName>{userData.name}</SC.UserName>
                <SC.UserName>{userData.login}</SC.UserName>
                <SC.UserName>{userData.location}</SC.UserName>
                <SC.UserName>{userData.company}</SC.UserName>
                <SC.UserName>{userData.email}</SC.UserName>
                <SC.UserName>{`Member since: ${userData.created_at.substr(0, 4)}`}</SC.UserName>
            </SC.UserInfoContainer>
            <SC.UserInfoContainer>
                <SC.Title>Repos</SC.Title>
                {
                    reposData.map((item, index) => {
                        return(
                            <SC.RepoRow key={index} href={item.html_url} target="_blank">
                                <SC.UserName>{item.name}</SC.UserName>
                                <SC.UserName>{item.language}</SC.UserName>
                                {/* <SC.UserName>{item.visibility}</SC.UserName> */}
                            </SC.RepoRow>
                        )
                    })
                }
            </SC.UserInfoContainer>
            </>
            }
        </SC.Container>
    )
}

export default Home;
