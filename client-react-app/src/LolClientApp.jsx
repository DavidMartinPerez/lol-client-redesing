import React from 'react'
import styled from 'styled-components';
import FriendZone from './components/FriendZone';
import MainTemplate from './components/MainTemplate';
import MenuAction from './components/MenuAction';

const Layout = styled.section`
    background-image: url('https://www.pixel4k.com/wp-content/uploads/2019/11/yorick-lol-splash-art-league-of-legends_1574100321.jpg');
    background-size: cover;
    height: calc(100%);
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    z-index: 1;

    > * {
        padding: 50px 0px;
        height: calc(100% - 100px);
    }
`;



export default function LolClientApp() {
    return (
        <Layout>
            <MenuAction></MenuAction>
            <MainTemplate></MainTemplate>
            <FriendZone></FriendZone>
        </Layout>
    )
}
