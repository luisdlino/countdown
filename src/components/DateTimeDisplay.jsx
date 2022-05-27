import React from 'react';
import styled, { keyframes } from 'styled-components';

const DateTimeDisplay = ({ value, type, isAlmost }) => {
  return (
    <CountdownCard className={isAlmost ? 'almost' : ''}>
      <CardValue className={isAlmost ? 'almost' : ''}>
        <p>{value}</p>
        <p>{type}</p>
      </CardValue>
    </CountdownCard>
  );
};

const CountdownCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 140px;
    height: 110px;
    margin-top: 50px;
    margin-right: 2.5rem;
    background: linear-gradient(108.72deg, #fff7f95c 0%, #fbf9f98c 100%);
    border-radius: 20px;
    border: thin solid #fef7ff36;
    font-size: 28px;
    font-weight: bold;

    &.almost {
        background: linear-gradient(108.72deg, #fff7f95c 0%, #ffc3c38c 100%);
        border: thin solid #ff000036;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        font-size: 24px;
        width: 100px;
        height: 80px;
    }
`;

const blinker = keyframes`
    50% { opacity: 0; }
`;

const CardValue = styled.div`
    
    margin: 0px;

    &.almost {
        color: #E72D00;
        animation: ${blinker} 1s linear infinite;
    }
`;

export default DateTimeDisplay;
