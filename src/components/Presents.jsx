import React from 'react';
import styled from 'styled-components';

const Presents = () => {

  const presentsColors = ['orange', 'blue', 'green'];  

  return (
    <PresentsContainer>
        {presentsColors.map((value) => (
            <Present key={value} className={'present ' + value}>
                <Lid className={'lid  ' + value} />
                <Box className={'box ' + value} />
                <Bow className={'bow ' + value} />
                <Ribbon className={'ribbon ' + value} />
            </Present>
        ))}
    </PresentsContainer>
  );
};

const PresentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 200px;
`;

const Present = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.green {
        position: relative;
        left: -20px;
        width: 100px;
        height: 100px;
        z-index: 1;
    }

    &.blue {
        position: relative;
        left: 0;
        width: 120px;
        height: 160px;
        z-index: 0;
    }

    &.orange {
        position: relative;
        left: 20px;
        width: 130px;
        height: 120px;
        z-index: 10;
    }
`;

const Lid = styled.div`
    height: 20%;
    width: calc(100% + 10px);
    border: 4px solid #2C3A49;
    border-radius: 5px;
    box-shadow: inset 2px 2px rgba(255, 255, 255, 0.5), 5px 0 rgba(0, 0, 0, 0.15);

    &.green {
        background: #3DDC81;
    }

    &.blue {
        background: #1BB5FE;
    }

    &.orange {
        background: #FFA726;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
    border: 4px solid #2C3A49;
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: inset -10px 5px rgba(0, 0, 0, 0.3), 5px 0 rgba(0, 0, 0, 0.15);

    &.green {
        background-image: radial-gradient(#fff 20%, transparent 20%), radial-gradient(#fff 20%, transparent 20%);
        background-color: #3DDC81;
    }

    &.blue {
        background-image: radial-gradient(transparent 20%, transparent 20%), radial-gradient(transparent 20%, transparent 20%);
        background-color: #1BB5FE;
    }

    &.orange {
        background-image: radial-gradient(#2C3A49 20%, transparent 20%), radial-gradient(#2C3A49 20%, transparent 20%);
        background-color: #FFA726;
    }
`;

const Bow = styled.div`
    position: absolute;
    top: -20px;
    width: 20px;
    height: 20px;
    border: 4px solid #2C3A49;
    border-radius: 50%;
    box-shadow: inset 2px 2px rgba(255, 255, 255, 0.5), inset -2px -5px rgba(0, 0, 0, 0.3);

    &.green {
        background: #F75D4C;
        &::before,
        &::after {
            background: #F75D4C;
        }
    }

    &.blue {
        background: #3DDC81;
        &::before,
        &::after {
            background: #3DDC81;
        }
    }

    &.orange {
        background: #F75D4C;
        &::before,
        &::after {
            background: #F75D4C;
        }
    }

    &::before,
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: -10px;
        width: 30px;
        height: 30px;
        border: 4px solid #2C3A49;
        border-radius: 50%;
        box-shadow: inset 2px 2px rgba(255, 255, 255, 0.5), inset -2px -5px rgba(0, 0, 0, 0.3);
        z-index: -1;
    }

    &::before {
        left: 15px;
    }

    &::after {
        right: 15px;
    }
`;

const Ribbon = styled.div`
    position: absolute;
    top: -3px;
    width: 30px;
    height: calc(100% - 5px);
    border: 4px solid #2C3A49;
    border-radius: 5px;
    box-shadow: inset 2px 2px rgba(255, 255, 255, 0.5);

    &::before {
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        background: rgba(0, 0, 0, 0.3);
        top: 21%;
    }

    &.green {
        background: #F75D4C;
    }

    &.blue {
        background: #3DDC81;
    }

    &.orange {
        background: #F75D4C;
    }
`;

export default Presents;
