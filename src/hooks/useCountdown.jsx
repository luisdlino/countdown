import { useEffect, useState } from 'react';

const useCountdown = (endDate) => {
  const parsedDate = new Date(endDate).getTime();

  const [countDown, setCountDown] = useState(
    parsedDate - new Date().getTime()
  );

  useEffect(() => {
    // update every second
    const interval = setInterval(() => {
      setCountDown(parsedDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [parsedDate]);

  if(isNaN(parsedDate)) return [0, 0, 0, 0];

  return getDateTime(countDown);
};

const getDateTime = (countDown) => {
  // calculate time difference between now and expected date
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
