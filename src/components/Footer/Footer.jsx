import { Link } from 'react-router-dom';

import classnames from 'classnames/bind';
import footer from 'components/Footer/Footer.module.scss';

const cn = classnames.bind(footer);

const Footer = ({ getCursorState }) => {
  return (
    <footer className={cn('footer')}>
      <div className={cn('footer__item')}>
        <div className={cn('footer__link-wrap')}>
          <Link
            to="project"
            className={cn('footer__link')}
            onMouseEnter={() => getCursorState(true)}
            onMouseLeave={() => getCursorState(false)}
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            className={cn('footer__link')}
            onMouseEnter={() => getCursorState(true)}
            onMouseLeave={() => getCursorState(false)}
          >
            CONTACT
          </Link>
        </div>
        <div className={cn('footer__copy')}>&copy; JISUN LEE 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
