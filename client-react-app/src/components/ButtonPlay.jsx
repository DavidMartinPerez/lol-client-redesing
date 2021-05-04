import React from 'react'
import styled from 'styled-components';
import { blue, white } from '../global/colors';

const Button = styled.button`
    background-color: ${blue};
    border-radius: 50px;
    border: none;
    box-shadow: 0px 7px 17px 1px ${blue};
    color: ${white};
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    outline: none;
    padding: 5px;
    transform: scale(.9);
    transition: 0.2s;
    width: 150px;
    &:hover {
        transform: scale(1);
        box-shadow: 0px 2px 20px 1px ${blue};
        font-size: 20px;
    }
`


export default function ButtonPlay() {
    return (
        <Button>
            INICIAR
        </Button>
    )
}
