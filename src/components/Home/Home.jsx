import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import classnames from 'classnames/bind';
import home from 'components/Home/Home.module.scss';

const cn = classnames.bind(home);

const charctor = [
  {
    id: 0,
    text: 'W'
  },
  {
    id: 1,
    text: 'E'
  },
  {
    id: 2,
    text: 'L'
  },
  {
    id: 3,
    text: 'C'
  },
  {
    id: 4,
    text: 'O'
  },
  {
    id: 5,
    text: 'M'
  },
  {
    id: 6,
    text: 'E'
  },
  {
    id: 7,
    text: '!'
  }
];

const Home = ({ getLink, getCursorState }) => {
  const mm = moment();
  const [char, setChar] = useState(charctor);
  const [curTime, setCurTime] = useState(moment().format('hh:mm:ss'));
  const [weather, setWeather] = useState({ name: 'seoul', temp: 0, weather: null });

  const getWeatherInfo = async () => {
    try {
      const apiKey = '702e10d2aaeeccc86007eff5db979f3c';
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric`);
      const { data } = response;

      setWeather({
        name: data.name,
        temp: Math.floor(data.main.temp),
        weather: data.weather[0].main
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLink('Info'); // info로 페이지로 이동
    getWeatherInfo(); // weather 정보 가져오기
    const interval = setInterval(() => setCurTime(moment().format('hh:mm:ss')), 1000); // current time 업데이트

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 클릭시 알파벳 전환
  const nextChar = (e, idx) => {
    const targetChar = e.target.innerText;
    const newArr = [...char];

    // where 65 stands for offset from 0 in ASCII table and 30 means that after 30th character it will start from the beginning (offset character code is divided by 25 and you get remainder that is offset back to proper ASCII code)
    newArr[idx].text = String.fromCharCode(((targetChar.charCodeAt(0) + 1 - 65) % 30) + 65);
    setChar(newArr);
  };

  return (
    <div className={cn('home')}>
      <div className="logbook">
        <span className="logbook__tit">logbook entry 00: &#91;</span>
        <div className="logbook__info logbook__info--date">
          <span>date: </span>
          <span>{mm.format('YYYY.MM.DD')}</span>
        </div>
        <div className="logbook__info logbook__info---time">
          <span>time: </span>
          <span>{curTime}</span>
        </div>
        <div className="logbook__info logbook__info---weather">
          <span>weather: </span>
          <span>{`${weather.name} ${weather.temp}°C ${weather.weather}`}</span>
        </div>
        <span>&#93;</span>
      </div>
      <div className={cn('home__title')}>
        <div className={cn('home__title-gun')}>
          <span>┎√〓━</span>
        </div>
        <div className={cn('home__title-text')}>
          {char.map((item, idx) => (
            <span
              role="presentation"
              key={item.id}
              onClick={e => nextChar(e, idx)}
              onMouseEnter={() => getCursorState(true)}
              onMouseLeave={() => getCursorState(false)}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
