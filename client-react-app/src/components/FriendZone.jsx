import React from 'react'
import styled from 'styled-components';
import { black_bold, white } from '../global/colors';
import CircleFriend from './CircleFriend';
import ChatIcon from './icons/Chat';
import GroupIcons from './layout/GroupIcons';

const FriendZoneLayout = styled.section`
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    background-color: ${black_bold}88;
`

const userOnline = {
    img: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Pretty_Kitty_Rengar_profileicon.png',
    online: true,
    name: 'Pepe'
}

const userOfline = {
    img: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Pretty_Kitty_Rengar_profileicon.png',
    online: false,
    name: 'Tresh'
}

export default function FriendZone() {
    return (
        <FriendZoneLayout>
            <GroupIcons>
                <CircleFriend name={userOnline.name} img={'https://www.mobafire.com/images/avatars/yuumi-classic.png'} online={userOnline.online} ></CircleFriend>
            </GroupIcons>
            <GroupIcons margin={20} justifyContent={'center'}>
                <CircleFriend name={userOnline.name} img={userOnline.img} online={userOnline.online} ></CircleFriend>
                <CircleFriend name={userOnline.name} img={userOnline.img} online={userOnline.online} ></CircleFriend>
                <CircleFriend name={userOfline.name} img={userOfline.img} online={userOfline.online} ></CircleFriend>
                <CircleFriend name={userOfline.name} img={userOfline.img} online={userOfline.online} ></CircleFriend>
            </GroupIcons>
            <GroupIcons>
                <ChatIcon fill={white}></ChatIcon>
            </GroupIcons>
        </FriendZoneLayout>
    )
}
