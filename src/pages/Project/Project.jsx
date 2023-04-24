import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames/bind';
import project from 'pages/Project/Project.module.scss';

const cn = classnames.bind(project);

const projectList = [
  {
    id: 1,
    year: 2020,
    name: 'nct127',
    classification: 'pub',
    tools: 'tools',
    link: '',
    marquee: 'nct127,nct127,nct127,nct127,nct127'
  },
  {
    id: 2,
    year: 2020,
    name: 'leferi entertainment',
    classification: 'pub',
    tools: 'tools',
    link: 'https://www.naver.com/',
    marquee: 'leferi entertainment,leferi entertainment,leferi entertainment,leferi entertainment,leferi entertainment'
  },
  {
    id: 3,
    year: 2020,
    name: 'loivie',
    classification: 'pub',
    tools: 'tools',
    link: '',
    marquee: 'loivie,loivie,loivie,loivie,loivie'
  },
  {
    id: 4,
    year: 2020,
    name: 'the hyundai seoul',
    classification: 'pub',
    tools: 'tools',
    link: '',
    marquee: 'the hyundai seoul,the hyundai seoul,the hyundai seoul,the hyundai seoul,the hyundai seoul'
  },
  {
    id: 5,
    year: 2020,
    name: 'planit 147',
    classification: 'pub',
    tools: 'tools',
    link: '',
    marquee: 'planit 147,planit 147,planit 147,planit 147,planit 147'
  }
];

const Project = ({ getLink, getCursorState }) => {
  const marqueeRef = useRef([]);
  const [list, setList] = useState(projectList);
  const [inputVal, setInputVal] = useState('');

  const setMarqueeItem = () => {
    marqueeRef.current.forEach((item, idx, arr) => {
      const text = item.textContent.split(',').map(itm => `<li class="marquee__itm">${itm}</li>`);
      arr[idx].innerHTML = text.join().replace(/,/g, '');

      item.querySelectorAll('.marquee__itm').forEach(itm => {
        item.appendChild(itm.cloneNode(true));
      });
    });
  };

  // const filteredSearchVal = () => list.filter(val => val.name.includes(inputVal));

  useEffect(() => {
    getLink('/'); // 홈으로 이동
    setMarqueeItem();
  }, []);

  useEffect(() => {
    // setList([...list, filteredSearchVal]);
  }, [inputVal]);

  return (
    <div className={cn('project')}>
      <div className={cn('project__content')}>
        <div className={cn('project__content-left')}>
          <h2 className={cn('project__tit')}>Projects</h2>
          <div className={cn('logbook', 'project__logbook')}>
            <span className="logbook__tit">logbook entry : &#91;</span>
            <p className="logbook__text">my projects</p>
            <div className="logbook__info">
              <span>Amount: </span>
              <span>0</span>
            </div>
            <span>&#93;</span>
          </div>
          <div className={cn('project__search')}>
            <label htmlFor="search">search</label>
            <div className={cn('project__search-input')}>
              <input id="search" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
              <div className={cn('project__search-input-edge-wrap')}>
                <span className={cn('project__search-input-edge', 'project__search-input-edge--1')} />
                <span className={cn('project__search-input-edge', 'project__search-input-edge--2')} />
                <span className={cn('project__search-input-edge', 'project__search-input-edge--3')} />
                <span className={cn('project__search-input-edge', 'project__search-input-edge--4')} />
              </div>
            </div>
          </div>
        </div>
        <div className={cn('project__content-right')}>
          <ul className={cn('project__list')}>
            {list
              .slice(0)
              .reverse()
              .map((item, idx) => (
                <li
                  key={item.id}
                  className={cn('project__list-itm')}
                  onMouseEnter={() => getCursorState(true)}
                  onMouseLeave={() => getCursorState(false)}
                >
                  <span className={cn('project__list-year')}>{item.year}</span>
                  <div className={cn('project__list-name-wrap')}>
                    <h3 className={cn('project__list-name')}>{item.name}</h3>
                    {item.link ? (
                      <div className={cn('project__list-link')}>
                        <Link to={item.link} target="_blank" />
                        <svg
                          width="70"
                          height="70"
                          viewBox="0 0 306 255"
                          fill="none"
                          className={cn('project__list-link-svg')}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            className="st0"
                            d="M69.0435 212.356L97.9117 185.699L112.129 201.095L140.997 174.438L126.78 159.042L184.516 105.728C192.134 98.6939 192.607 86.8166 185.573 79.1992C178.539 71.5818 166.661 71.1088 159.044 78.1427L43.5713 184.771C35.9539 191.805 35.4808 203.682 42.5148 211.299C49.5488 218.917 61.4261 219.39 69.0435 212.356ZM200.969 64.9821C186.083 48.8615 160.948 47.8606 144.827 62.7464L29.3542 169.374C13.2336 184.26 12.2326 209.396 27.1184 225.516C42.0043 241.637 67.1399 242.638 83.2605 227.752L112.129 201.095L140.997 174.438L198.733 121.124C214.854 106.238 215.855 81.1027 200.969 64.9821Z"
                            fill="#fff"
                          />
                          <path
                            fillRule="evenodd"
                            d="M147.121 177.3L262.594 70.6717C270.211 63.6378 270.684 51.7605 263.651 44.143C256.617 36.5256 244.739 36.0526 237.122 43.0866L208.254 69.7435L193.82 83.072L179.386 96.4005L121.649 149.714C114.032 156.748 113.559 168.626 120.593 176.243C127.627 183.861 139.504 184.334 147.121 177.3ZM279.047 29.926C264.161 13.8054 239.025 12.8044 222.905 27.6902L194.037 54.3472L208.734 69.3004L179.386 96.4005L165.168 81.0041L107.432 134.318C91.3115 149.204 90.3105 174.34 105.196 190.46C120.082 206.581 145.218 207.582 161.338 192.696L276.811 86.0681C292.932 71.1823 293.933 46.0466 279.047 29.926Z"
                            fill="#ff9139"
                            className="st0"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  <div className={cn('project__list-row')}>
                    <span className={cn('project__list-row-cla')}>{item.classification}</span>
                    <span className={cn('project__list-row-tools')}>{item.tools}</span>
                  </div>
                  <div className={cn('project__list-marquee-wrap')}>
                    <ul
                      ref={el => {
                        marqueeRef.current[idx] = el;
                      }}
                      className={cn('marquee', 'project__list-marquee')}
                    >
                      {item.marquee}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
