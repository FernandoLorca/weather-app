import { useState, useEffect } from 'react';
import HeaderMainContent from './HeaderMainContent';
import DetailsMainContent from './DetailsMainContent';

const MainContent = ({ data }) => {
  const [weatherImage, setWeatherImage] = useState('');

  const handleImage = () => {
    if (!data[0]) return;
    const weatherMain = data[0].weather[0].main;
    switch (weatherMain) {
      case 'Clear':
        setWeatherImage('/clear.svg');
        break;
      case 'Clouds':
        setWeatherImage('/clouds.svg');
        break;
      case 'Haze':
        setWeatherImage('/haze.svg');
        break;
      case 'Rain':
        setWeatherImage('/rain.svg');
        break;
      case 'Snow':
        setWeatherImage('/snow.svg');
        break;
    }
  };

  useEffect(() => handleImage(), [data[0]]);

  return (
    <div className={!data[0] ? 'hidden' : undefined}>
      <HeaderMainContent data={data} weatherImage={weatherImage} />
      <DetailsMainContent data={data} />
    </div>
  );
};

export default MainContent;
