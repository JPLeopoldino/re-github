import styled from 'styled-components';
import { BsGithub } from "react-icons/bs";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #17102D; */
    background: rgb(13,9,24);
    background: linear-gradient(0deg, rgba(13,9,24,1) 0%, rgba(25,17,51,1) 100%);
    /* background-color: #0d0f17; */

    &::after{
        content: '';
        position: absolute;
        top: -50px;
        left: -50px;
        width: 1200px;
        height: 1200px;
        border-radius: 100%;
        background: rgb(18,11,129);
        background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%);
    }

    &::before{
        content: '';
        position: absolute;
        top: 50px;
        right: -50px;
        width: 800px;
        height: 800px;
        border-radius: 100%;
        background: rgb(18,11,129);
        background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%);
    }
`;

export const Button = styled.button`
    padding: 10px 40px;
    background-color: rgba(27, 23, 50, 0.5);
    outline: 1px solid #90a0d1;
    z-index: 99;
    border-radius: 24px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    border: none;

    &:hover{
        /* padding: 9px 35px; */
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.2);
        outline: 2px solid #90a0d1;
        background-color: rgba(27, 23, 50, 0.1);
    }
    &:focus{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.2);
        background-color: rgba(27, 23, 50, 0.1);
    }

    &:active{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.5);
    }
`;

export const Input = styled.input`
    padding: 10px 30px;
    background-color: rgba(27, 23, 50, 0.3);
    outline: 1px solid #90a0d1;
    z-index: 99;
    border-radius: 24px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    transition: 0.2s ease;
    box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;

    &:focus{
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.2);
        background-color: rgba(27, 23, 50, 0.1);
    }
`;

export const Icon = styled(BsGithub)`
    color: #17102D;
    position: absolute;
    font-size: 130rem;
    z-index: 10;
    top: -40%;
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: 42px;
    margin-bottom: 0.5em;
    z-index: 99;
`;

export const UserInfoContainer = styled.form`
    padding: 5em 3em;
    overflow: hidden;
    /* background:  #1B1732; */
    background: rgba(27, 23, 50, 0.75);
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
    /* background: rgb(18,11,129);
    background: linear-gradient(0deg, rgba(18,11,129,1) 0%, rgba(33,5,126,1) 49%, rgba(145,23,232,1) 100%); */
    display: flex;
    flex-direction: column;
    gap: 5em;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid #90a0d1;
    z-index: 999;
    backdrop-filter: blur(24px);
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 3em rgba(144, 160, 209, 0.08);
    }
`;

export const UserName = styled.p`
    color: #FFF;
    font-size: 18px;
`;

export const UserAvatar = styled.img`
    width: 200px;
    height: auto;
    border-radius: 100%;
    border: 2px solid #90a0d1;
`;