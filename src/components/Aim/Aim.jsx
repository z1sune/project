import { Link } from 'react-router-dom';

import classnames from 'classnames/bind';
import aim from 'components/Aim/Aim.module.scss';

const cn = classnames.bind(aim);

const Aim = ({ link, getCursorState }) => {
  return (
    <Link to={link} className={cn('cross')} onMouseEnter={() => getCursorState(true)} onMouseLeave={() => getCursorState(false)}>
      <span className={cn('cross__edge', 'cross__edge--1')} />
      <span className={cn('cross__edge', 'cross__edge--2')} />
      <span className={cn('cross__edge', 'cross__edge--3')} />
      <span className={cn('cross__edge', 'cross__edge--4')} />
      <span className={cn('cross__circle')}>
        <span className={cn('cross__bar', 'cross__bar--horiz')} />
        <span className={cn('cross__bar', 'cross__bar--verti')} />
      </span>
    </Link>
  );
};

export default Aim;
