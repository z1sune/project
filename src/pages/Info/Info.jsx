import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classnames from 'classnames/bind';
import info from 'pages/Info/Info.module.scss';

const cn = classnames.bind(info);

const dataGameList = {
  col1: [
    {
      id: 1,
      name: 'karma',
      text: 'dragonfly, 2002',
      image:
        'https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 2,
      name: 'wolfenstein\nenemy territory',
      text: 'splash damage, 2003',
      image: 'https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 3,
      name: 'guns',
      text: 'maiet ent, 2004',
      image:
        'https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 4,
      name: 'special force',
      text: 'dragonfly, 2004',
      image:
        'https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 5,
      name: 'sudden attack',
      text: 'nexon games, 2005',
      image: 'https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    }
  ],
  col2: [
    {
      id: 6,
      name: 'ava',
      text: 'neowiz, 2007',
      image:
        'https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 7,
      name: 'crossfire',
      text: 'smilegate, 2007',
      image:
        'https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 8,
      name: 'takedown',
      text: 'kama digital ent, 2007',
      image:
        'https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 9,
      name: 'counter strike\nonline',
      text: 'nexon games, 2007',
      image:
        'https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 10,
      name: 'left 4 dead',
      text: 'turtle rock, 2008',
      image:
        'https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    }
  ],
  col3: [
    {
      id: 11,
      name: 'zombie master',
      text: 'value, 2009',
      image:
        'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 12,
      name: 'killing floor',
      text: 'tripwire, 2009',
      image:
        'https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 13,
      name: 'bettle field 4',
      text: 'dice, 2013',
      image:
        'https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 14,
      name: 'overwatch',
      text: 'blizzard, 2016',
      image:
        'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    },
    {
      id: 15,
      name: 'pubg: battlegrounds',
      text: 'pubg studios, 2017',
      image:
        'https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
    }
  ]
};

// const gameList = [
//   {
//     id: 1,
//     name: 'karma',
//     text: 'dragonfly, 2002',
//     image:
//       'https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 2,
//     name: 'wolfenstein\nenemy territory',
//     text: 'splash damage, 2003',
//     image: 'https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 3,
//     name: 'guns',
//     text: 'maiet ent, 2004',
//     image:
//       'https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 4,
//     name: 'special force',
//     text: 'dragonfly, 2004',
//     image:
//       'https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 5,
//     name: 'sudden attack',
//     text: 'nexon games, 2005',
//     image: 'https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 6,
//     name: 'ava',
//     text: 'neowiz, 2007',
//     image:
//       'https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 7,
//     name: 'crossfire',
//     text: 'smilegate, 2007',
//     image:
//       'https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 8,
//     name: 'takedown',
//     text: 'kama digital ent, 2007',
//     image:
//       'https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 9,
//     name: 'counter strike\nonline',
//     text: 'nexon games, 2007',
//     image:
//       'https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 10,
//     name: 'left 4 dead',
//     text: 'turtle rock, 2008',
//     image:
//       'https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 11,
//     name: 'zombie master',
//     text: 'value, 2009',
//     image:
//       'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 12,
//     name: 'killing floor',
//     text: 'tripwire, 2009',
//     image:
//       'https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 13,
//     name: 'bettle field 4',
//     text: 'dice, 2013',
//     image:
//       'https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 14,
//     name: 'overwatch',
//     text: 'blizzard, 2016',
//     image:
//       'https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   },
//   {
//     id: 15,
//     name: 'pubg: battlegrounds',
//     text: 'pubg studios, 2017',
//     image:
//       'https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w'
//   }
// ];

const Info = ({ getLink }) => {
  const colRef = useRef([]);
  // const [movement, setMovement] = useState(false);
  // const [coordinate, setCoordinate] = useState({});

  // 마우스 이동
  // const addCoordinateVal = e => {
  //   setMovement(true);
  //   setCoordinate({ x: (window.innerHeight / 2 - e.clientY) / 15, y: (window.innerWidth / 2 - e.clientX) / 15 });
  // };

  const appendImages = () => {
    colRef.current.forEach(col => {
      col.querySelectorAll('.gallery-img').forEach(item => {
        col.appendChild(item.cloneNode(true));
      });
    });
  };

  useEffect(() => {
    getLink('/'); // 홈으로 이동
    appendImages();

    ScrollTrigger.create({
      trigger: '.Info_info__vyIut',
      start: () => 'top 50%',
      end: 'bottom 50%',
      markers: true,
      onUpdate: () => {
        console.log('update');
      }
    });
  }, []);

  return (
    <div className={cn('info')}>
      <div className={cn('logbook', 'info__logbook')}>
        <span className="logbook__tit">logbook entry 01: &#91;</span>
        <p className="logbook__text">
          I Love to playing shooting games!
          <br />
          Do you want to know what games I&apos;ve been played?
        </p>
        <div className="logbook__info">
          <span>games: </span>
        </div>
        <span>&#93;</span>
      </div>
      <div className={cn('info__gallery')}>
        {Object.values(dataGameList).map((game, idx) => (
          <div
            ref={el => {
              colRef.current[idx] = el;
            }}
            className={cn('gallery-col', 'info__gallery-col')}
          >
            {game.map(img => (
              <div className={cn('gallery-img', 'info__gallery-img')}>
                <img src={img.image} alt={img.name} />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/**
       * swiper
       */}
      {/* <div className={cn('info__swiper-wrap')}>
        <Swiper
          className={cn('info__swiper')}
          modules={[EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          speed={500}
          loop
          // navigation
          effect="fade"
          onSlideChange={() => console.log('slide change')}
          onSwiper={() => console.log('swiper')}
        >
          {gameList.map(game => (
            <SwiperSlide key={game.id} className={cn('info__swiper-slide')}>
              <div className={cn('info__card-wrap')}>
                <div
                  className={cn('test', 'info__card-con')}
                  onMouseMove={e => addCoordinateVal(e)}
                  onMouseLeave={() => setCoordinate({ x: 0, y: 0 })}
                >
                  <div
                    className={cn('info__card', { 'info__card--active': movement })}
                    style={{ transform: `rotateX(${coordinate.x}deg) rotateY(${coordinate.y}deg)` }}
                  >
                    <div className={cn('info__card-name')}>
                      {game.name.split('\n').map(val => (
                        <div>{val}</div>
                      ))}
                    </div>
                    <div className={cn('info__card-text-wrap')}>
                      <div className={cn('info__card-text')}>
                        {game.text.split('\n').map(val => (
                          <div>{val}</div>
                        ))}
                      </div>
                    </div>
                    <div className={cn('info__card-img')}>
                      <img src={game.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default Info;
