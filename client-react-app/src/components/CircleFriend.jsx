import React from 'react'
import styled from 'styled-components';
import { black_bold, green, orange, red } from '../global/colors';

const CircleUser = styled.circle`
    position: relative;
    img {
        position: relative;
        height: 50px;
        width: 50px;
        background-size: cover;
        border-radius: 50%;
        opacity: ${ props => props.status ? '1' : '0.2'};
    }
    &:after {
        position: absolute;
        top: 0px;
        right: 0px;
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        background-color: ${ props => props.status ? green : `${red}44`};
        border-radius: 50%;
    }
`;

export default function CircleFriend( { img, name, online } ) {

    return (
        <CircleUser status={online} >
            <img src={img} alt={name} />
        </CircleUser>
    )
}
