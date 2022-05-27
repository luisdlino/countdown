import React from 'react';
import styled, { keyframes } from 'styled-components';

const Cake = () => {

  return (
    <CakeContainer>
      <CakeBase>
        <Plate />
          <Layer className="bottom" />
          <Layer className="middle" />
          <Layer className="top" />
        <Icing />
          <Drip className="first" />
          <Drip className="middle" />
          <Drip className="last" />
        <Candle>
            <Flame />
        </Candle>
      </CakeBase>
    </CakeContainer>
  );
};

const CakeContainer = styled.div`
  width: 125px;
  height: 100px;
  position: relative;
`;

const CakeBase = styled.div`
  position: absolute;
  width: 125px;
  height: 100px;
  top: 80%;
  left: 100%;
  margin-top: -70px;
  margin-left: -125px;
`;

const Plate = styled.div`
  width: 135px;
  height: 55px;
  position: absolute;
  bottom: -5px;
  left: -5px;
  background-color: #ccc;
  border-radius: 50%;
  box-shadow: 0 2px 0 #b3b3b3, 0 4px 0 #b3b3b3, 0 5px 40px rgba(0, 0, 0, 0.5);
`;

const Icing = styled.div`
  top: 3px;
  left: 5px;
  background-color: #f0e4d0;
  width: 115px;
  height: 45px;
  border-radius: 50%;
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    right: 5px;
    bottom: 6px;
    left: 5px;
    background-color: #f4ebdc;
    box-shadow: 0 0 4px #f6efe3, 0 0 4px #f6efe3, 0 0 4px #f6efe3;
    border-radius: 50%;
    z-index: 1;
  }
`;

const Candle = styled.div`
  position: absolute;
  background-color: #7B020B;
  width: 8px;
  height: 25px;
  border-radius: 8px/4px;
  top: -10px;
  left: 53%;
  margin-left: -8px;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 4px;
    border-radius: 50%;
    background-color: #ad030f;
  }
`;

const Layer = styled.div`
  position: absolute;
  display: block;
  width: 125px;
  height: 50px;
  border-radius: 50%;
  background-color: #553c13;
  box-shadow: 0 1px 0px #6a4b18, 0 2px 0px #33240b, 0 3px 0px #32230b, 0 4px 0px #31230b, 0 5px 0px #30220b, 0 6px 0px #2f220b, 0 7px 0px #2f210a, 0 8px 0px #2e200a, 0 9px 0px #2d200a, 0 10px 0px #2c1f0a, 0 11px 0px #2b1f0a, 0 12px 0px #2a1e09, 0 13px 0px #2a1d09, 0 14px 0px #291d09, 0 15px 0px #281c09;

  &.top {
    top: 0px;
  }
  
  &.middle {
    top: 17px;
  }
  
  &.bottom {
    top: 33px;
  }
`;

const Drip = styled.div`
  display: block;
  width: 25px;
  height: 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #f0e4d0;
  position: absolute;

  &.first {
    top: 26px;
    left: 7px;
    transform: skewY(15deg);
    height: 24px;
    width: 20px;
  }

  &.middle {
    top: 34px;
    left: 90px;
    transform: skewY(-15deg);
  }

  &.last {
    top: 26px;
    left: 45px;
    width: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

const flicker = keyframes`
  0% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.2), 0 0 20px rgba(255, 165, 0, 0.2), 0 0 60px rgba(255, 165, 0, 0.2), 0 0 80px rgba(255, 165, 0, 0.2);
  }
  25% {
    transform: skewX(-5deg);
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5), 0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5), 0 0 80px rgba(255, 165, 0, 0.5);
  }
  50% {
    transform: skewX(10deg);
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.3), 0 0 60px rgba(255, 165, 0, 0.3), 0 0 80px rgba(255, 165, 0, 0.3);
  }
  75% {
    transform: skewX(-10deg);
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.4), 0 0 20px rgba(255, 165, 0, 0.4), 0 0 60px rgba(255, 165, 0, 0.4), 0 0 80px rgba(255, 165, 0, 0.4);
  }
  100% {
    transform: skewX(5deg);
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5), 0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5), 0 0 80px rgba(255, 165, 0, 0.5);
  }
`;

const Flame = styled.div`
  position: absolute;
  background-color: orange;
  width: 8px;
  height: 18px;
  border-radius: 10px 10px 10px 10px/25px 25px 10px 10px;
  top: -17px;
  left: 95%;
  margin-left: -7.5px;
  z-index: 10;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5), 0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5), 0 0 80px rgba(255, 165, 0, 0.5);
  transform-origin: 50% 90%;
  animation: ${flicker} 1s ease-in-out alternate infinite;
`;

export default Cake;