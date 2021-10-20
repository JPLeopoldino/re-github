import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Lottie from 'react-lottie';

import * as SC from './styles';

import animationData from '../../assets/loading.json';
import { useUser, ReposData } from '../../hooks/user';

import { Card, ReposCard, UserCard } from '../../components/Cards';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';
import { Background } from '../../components/Background';

const Home: React.FC = () => {

    const { getAllUserInfo, userData, reposData, userLogon, loading, reposLanguagesData } = useUser();
    const [redirect, setRedirect] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [filteredRepos, setFilteredRepos] = useState<ReposData[]>(reposData);
    const RepositoriesData = { filteredRepos, reposLanguagesData }

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const handleRedirect = () => {
        setRedirect(!redirect)
    }

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
            { showModal
                ? <Modal
                    close={handleShowModal}
                    redirect={handleRedirect}
                  />
                : null
            }
            <UserCard
                openModal={handleShowModal}
                data={userData}
            />
            
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
                    <Input
                        type="text"
                        placeholder="Search a repository"
                        onChange={handleSearch}
                        width={90}
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
            <Background/>
        </SC.Container>
    )
}

export default Home;
