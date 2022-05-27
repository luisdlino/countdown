import React from 'react';
import styled from 'styled-components';
import Balloon from './Ballon';

const Balloons = ({number}) => {

    const ballons = [];
    for (let i = 0; i <= number; i++) {
        ballons.push(<Balloon key={i} />);
    }

    return (
        <BalloonContainer>
            {ballons}
        </BalloonContainer>
    );
};

const BalloonContainer = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
`;

export default Balloons;
