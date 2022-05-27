import React from 'react';
import styled, { keyframes } from 'styled-components';

function random(num) {
    return Math.floor(Math.random() * num);
}

const Balloon = () => {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    const mt = random(200);
    const ml = random(50);
    const dur = random(5) + 5;
    return (
        <Balloon2 r={r} g={g} b={b} mt={mt} ml={ml} dur={dur} />
    );
};

const float = keyframes`
    from {
        transform: translateY(100vh);
        opacity: 1;
    }
    to {
        transform: translateY(-300vh);
        opacity: 0;
    }
`;

const Balloon2 = styled.div`
    height: 125px;
    width: 105px;
    z-index: 99;
    border-radius: 75% 75% 70% 70%;
    position: relative;
    background-color: rgba(${props => props.r},${props => props.g},${props => props.b},0.7);
    color: rgba(${props => props.r},${props => props.g},${props => props.b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${props => props.r - 10},${props => props.g - 10},${props => props.b - 10},0.7);
    margin: ${props => props.mt}px 0 0 ${props => props.ml}px;
    animation: ${float} ${props => props.dur}s ease-in infinite;

    &::before {
        content: "";
        height: 75px;
        width: 1px;
        padding: 1px;
        background-color: #FDFD96;
        display: block;
        position: absolute;
        top: 125px;
        left: 0;
        right: 0;
        margin: auto;
    }

    &::after {
        content: "▲";
        text-align: center;
        display: block;
        position: absolute;
        color: inherit;
        top: 120px;
        left: 0;
        right: 0;
        margin: auto;
    }
`;

export default Balloon;
