import React from 'react';
import styled from '@emotion/styled';

const Icon = ({condition}) => {

  const Icon = styled.img`
      width: 25%;
    `;

  var icon = '';
  switch (condition) {
  case 'Clouds':
    icon = `./img/weather/cloudy.png`;
    break;
  case 'Clear':
    icon = `./img/weather/clear.png`;
    break;
  case 'Haze':
    icon = `./img/weather/hail.png`;
    break;
  case 'Hail':
    icon = `./img/weather/hail.png`;
    break;
  case 'Fog':
    icon = `./img/weather/fog.png`;
    break;
  case 'Tornado':
    icon = `./img/weather/tornado.png`;
    break;
  case 'Dust':
    icon = `./img/weather/dust.png`;
    break;
  case 'Mist':
    icon = `./img/weather/clear.png`;
    break;
  case 'Snow':
    icon = `./img/weather/snow.png`;
    break;
  case 'Rain':
    icon = `./img/weather/rain.png`;
    break;
  case 'Drizzle':
    icon = `./img/weather/drizzle.png`;
    break;
  case 'Thunderstorm':
    icon = `./img/weather/thunderstorm.png`;
    break;
  default:
    icon = `./img/weather/fog.png`;
    break;
  }

  return(
    <Icon
      className="icon"
      src={icon}
      alt="Weather Icon">
    </Icon>
  );
};

export default Icon;
