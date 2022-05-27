import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';
import Cake from './Cake';
import styled from 'styled-components';
import { useEffect } from 'react';

const BirthdayOrInvalid = ({text}) => {
  return (
    <DisplayContainer>
      <Card>
        <CardText>{text}</CardText>
        <Cake />
      </Card>
    </DisplayContainer>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Counter>
        <DateTimeDisplay value={days} type={days <= 1 ? 'Day' : 'Days'} isAlmost={days <= 3} />
        <DateTimeDisplay value={hours} type={'Hours'} isAlmost={days <= 3} />
        <DateTimeDisplay value={minutes} type={'Min'} isAlmost={days <= 3} />
        <DateTimeDisplay value={seconds} type={'Sec'} isAlmost={days <= 3} />
    </Counter>
  );
};

const Countdown = ({ date, setParentCounter }) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  useEffect(() => {
    if (days === -1) {
      setParentCounter('today');
    } 
  }, [days, setParentCounter]);

  if (days + hours + minutes + seconds <= 0) {
    if (days === -1) {
      return <BirthdayOrInvalid text="Today it's CTO's BIRTHDAY!!" />;
    }
    return <BirthdayOrInvalid text="Invalid Date for CTO's BIRTHDAY"/>;
  } else {
    return (
      <DisplayContainer>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <Card>
          <CardText>to CTO's BIRTHDAY!</CardText>
          <Cake />
        </Card>
      </DisplayContainer>
    );
  }
};

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: patrickHand;
`;

const Card = styled.div`
  display: flex;
  font-size: 42px;
  align-items: center;
  justify-content: space-evenly;
  height: 150px;
  margin-top: 50px;
  background: linear-gradient(108.72deg, #fff7f95c 0%, #fbf9f98c 100%);
  border-radius: 20px;
  border: thin solid #fef7ff36;
  width: 500px;

  @media (max-width: 540px) {
    flex-direction: column;
    height: 300px;
    width: auto;
    padding: 0px 15px;
  }
`;

const CardText = styled.div`
  width: 300px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 540px) {
    flex-direction: row;
    width: 100%;
    margin-top: 50px;
    margin-left: 40px;
  }
`;

export default Countdown;
