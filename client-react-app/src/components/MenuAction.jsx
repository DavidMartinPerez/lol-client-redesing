import styled from 'styled-components';
import GroupIcons from './layout/GroupIcons';
import React from 'react';
import Logo from './Logo';
import HomeSVG from './icons/HomeSVG';
import PresentIcon from './icons/Present';
import TrophyIcon from './icons/Trophy';
import ShopIcon from './icons/Shop';
import { black_bold, white } from '../global/colors';

const MenuActionLayout = styled.aside`
    display: grid;
    grid-template-rows: 120px 1fr 50px;
    background-color: ${black_bold}66;
`

export default function MenuAction() {
    return (
        <MenuActionLayout>
            <GroupIcons>
                <Logo fill={white}></Logo>
            </GroupIcons>
            <GroupIcons margin={20} justifyContent={'center'}>
                <HomeSVG fill={white}></HomeSVG>
                <PresentIcon fill={white}></PresentIcon>
                <TrophyIcon fill={white}></TrophyIcon>
            </GroupIcons>
            <GroupIcons>
                <ShopIcon fill={white}></ShopIcon>
            </GroupIcons>
        </MenuActionLayout>
    )
}
