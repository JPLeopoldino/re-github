import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';

import * as SC from './styles';
import { Card, ReposCard } from '../../components/Cards';

import { useUser, ReposData } from '../../hooks/user';
import { Redirect } from 'react-router-dom';

const Home: React.FC = () => {

    const { getAllUserInfo, userData, reposData, userLogon, loading, reposLanguagesData } = useUser();
    const [redirect, setRedirect] = useState(false);

    // const [allData,setAllData] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState<ReposData[]>(reposData);

    const RepositoriesData = { filteredRepos, reposLanguagesData }

    const handleSearch = (event: any) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = reposData.filter((item) => {
            return item.name.search(value) !== -1;
        });
        setFilteredRepos(result);
    }

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

    useEffect(() => {
        const checkFilterRepos = () => {
            if(filteredRepos.length > 0){
                setFilteredRepos(reposData)
            } else {
                return;
            }
        }
        checkFilterRepos();
        
    }, [setFilteredRepos, reposData])

    return(
        redirect
        ? <Redirect to="/" />
        : <SC.Container>
            { loading
            ? <SC.LoadingContainer>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
            </SC.LoadingContainer>
            : <>
            {/* <SC.Title>Home</SC.Title> */}
            <Card
                width={25}
                height={50}
            >
                <SC.ArrowLeft onClick={() => setRedirect(!redirect)} />
                <SC.LinkContainer href="https://github.com/settings/profile" target="_blank" rel="noreferrer">
                    <SC.UserAvatar src={userData.avatar_url}/>
                </SC.LinkContainer>
                <SC.Column>
                    <SC.UserName>{userData.name}</SC.UserName>
                    <SC.UserLinkRow
                        href={userData.html_url}
                        target="_blank"
                    >
                        <SC.GitIcon/>
                        <SC.Text>{userData.login}</SC.Text>
                    </SC.UserLinkRow>
                </SC.Column>
                <SC.Divider/>
                <SC.Row>
                    <SC.UsersIcon/>
                    <SC.BoldText>{userData.followers}</SC.BoldText>
                    <SC.Text>followers · </SC.Text>
                    <SC.BoldText>{userData.following}</SC.BoldText>
                    <SC.Text>following</SC.Text>
                </SC.Row>
                {
                    userData.bio
                    ? <SC.Row>
                        <SC.QuoteIcon/>
                        <SC.Text>{userData.bio}</SC.Text>
                    </SC.Row>
                    : null
                }
                {
                    userData.company
                    ? <SC.Row>
                        <SC.CompanyIcon/>
                        <SC.BoldText>{userData.company}</SC.BoldText>
                    </SC.Row>
                    : null
                }
                {
                    userData.location
                    ? <SC.Row>
                        <SC.LocationIcon/>
                        <SC.BoldText>{userData.location}</SC.BoldText>
                    </SC.Row>
                    : null
                }
                {
                    userData.email
                    ? <SC.LinkRow
                        href={`mailto:${userData.email}`}
                        target="_blank"
                    >
                        <SC.EmailIcon/>
                        <SC.BoldText>{userData.email}</SC.BoldText>
                    </SC.LinkRow>
                    : null
                }
                {
                    userData.blog
                    ? <SC.LinkRow
                        href={userData.blog}
                        target="_blank"
                    >
                        <SC.BlogIcon/>
                        <SC.BoldText>{userData.blog}</SC.BoldText>
                    </SC.LinkRow>
                    : null
                }
                {
                    userData.twitter_username
                    ? <SC.LinkRow
                        href={`https://twitter.com/${userData.twitter_username}`}
                        target="_blank"
                    >
                        <SC.TwitterIcon/>
                        <SC.BoldText>{userData.twitter_username}</SC.BoldText>
                    </SC.LinkRow>
                    : null
                }
                <SC.Text>{`Member since: ${userData.created_at.substr(0, 4)}`}</SC.Text>
            </Card>
            
            <SC.Column>
                <Card
                    width={60}
                    height={7.75}
                >   
                    <SC.SimpleRow>
                        <SC.LinkTabRowActive
                            href="#/home"
                        >
                            <SC.OverviewIcon/>
                            <SC.BoldText>Overview</SC.BoldText>
                        </SC.LinkTabRowActive>
                        <SC.LinkTabRow
                            href={`https://github.com/${userLogon}?tab=repositories`}
                            target="_blank"
                        >
                            <SC.RepositoriesIcon/>
                            <SC.BoldText>Repositories</SC.BoldText>
                        </SC.LinkTabRow>
                        <SC.LinkTabRow
                            href={`https://github.com/${userLogon}?tab=projects`}
                            target="_blank"
                        >
                            <SC.ProjectsIcon/>
                            <SC.BoldText>Projects</SC.BoldText>
                        </SC.LinkTabRow>
                        <SC.LinkTabRow
                            href={`https://github.com/${userLogon}?tab=packages`}
                            target="_blank"
                        >
                            <SC.PackagesIcon/>
                            <SC.BoldText>Packages</SC.BoldText>
                        </SC.LinkTabRow>
                    </SC.SimpleRow>
                    <SC.Input
                        type="text"
                        placeholder="Search a repository"
                        onChange={handleSearch}
                    />
                </Card>
                <ReposCard
                    width={60}
                    height={41.75}
                    data={RepositoriesData}
                />
            </SC.Column>
            </>
            }
            <SC.SvgBG
                id="visual"
                viewBox="0 0 960 540"
                // width="960"
                // height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <path d="M0 109L192 66L384 125L576 60L768 93L960 77L960 0L768 0L576 0L384 0L192 0L0 0Z" fill="#230aad">
                </path>
                <path d="M0 152L192 249L384 201L576 249L768 163L960 271L960 75L768 91L576 58L384 123L192 64L0 107Z" fill="#3115b6">
                </path>
                <path d="M0 217L192 320L384 287L576 293L768 249L960 298L960 269L768 161L576 247L384 199L192 247L0 150Z" fill="#3d1ebf">
                </path>
                <path d="M0 406L192 379L384 422L576 390L768 455L960 417L960 296L768 247L576 291L384 285L192 318L0 215Z" fill="#4826c7">
                </path>
                <path d="M0 428L192 460L384 492L576 444L768 503L960 487L960 415L768 453L576 388L384 420L192 377L0 404Z" fill="#532ed0">
                </path>
                <path d="M0 541L192 541L384 541L576 541L768 541L960 541L960 485L768 501L576 442L384 490L192 458L0 426Z" fill="#5d36d9">
                </path>
            </SC.SvgBG>
            {/* <SC.SvgBG
                id="visual"
                viewBox="0 0 960 540"
                width="100vw"
                height="100vh"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                // style={{
                //     position: 'absolute',

                // }}
            >
                <g fill="rgba(18,11,129,1)">
                    <circle r="273" cx="439" cy="526"></circle>
                    <circle r="188" cx="928" cy="95"></circle>
                    <circle r="246" cx="185" cy="42"></circle>
                </g>
            </SC.SvgBG> */}
        </SC.Container>
    )
}

export default Home;
