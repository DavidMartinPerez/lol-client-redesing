import React from 'react'
import styled from 'styled-components'
import { blue, grey_light, grey_regular, orange, white, white_bold } from '../global/colors';
import ButtonPlay from './ButtonPlay';
import YoutubeEmbed from './YoutubeIframe';

const MainTemplateLayout = styled.section`
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderTemplate = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const GroupCoins = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Coin = styled.div`
    > * {
        position: relative;
        color: ${white};
        display: inline;
    }
    > *:before {
        content:'';
        display: block;
        position: absolute;
        top: 5px;
        left: -20px;
        width: 14px;
        height: 14px;
        background-color: ${props => props.color ?? 'red'};
        box-shadow: 0px 1px 13px 3px ${props => props.color ?? 'red'};
        border-radius: 50%;
    }
`

const MainBody = styled.article`
    color: ${white};
    > * {
        margin: 0px;
        text-transform: uppercase;
    }
    h2{
        font-size: 5rem;
        display: inline;
        line-height: 4rem;
    }
    h5 {
        font-size: 28px;
        color: ${orange}
    }
    p {
        padding-top: 2rem;
        font-size: 0.9rem;
        color: ${grey_regular}
    }
`

const UserInfo = styled.div`
    display: flex;
`

const UserName = styled.div`
    padding-left: 30px;
    p{ margin: 0px; }
    p:first-child {
        font-size:2rem;
        color: ${white}
    }
    p:last-child {
        font-size:1.5rem;
        color: ${white_bold}
    }
`

const coins = [{color: orange, value: 3200},{color: blue, value: 3200}];

export default function MainTemplate() {
    return (
        <MainTemplateLayout>
            <HeaderTemplate>
                <ButtonPlay></ButtonPlay>
                <UserInfo>
                    <GroupCoins>
                        {
                            coins.map( ({value, color}) => <Coin key={color} color={color}> <p>{value}</p> </Coin> )
                        }
                    </GroupCoins>
                    <UserName>
                        <p>xDeivi</p>
                        <p>Nivel: 105</p>
                    </UserName>
                </UserInfo>

            </HeaderTemplate>
            <MainBody>
                    <h5>lol pls</h5>
                    <h2>Estado del juego <br/>y el cliente</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis quasi, necessitatibus aut <br/> eaque dolor illum? Corporis labore voluptas ullam asperiores</p>
                    <YoutubeEmbed embedId="Zasx9hjo4WY" />
            </MainBody>
        </MainTemplateLayout>
    )
}
