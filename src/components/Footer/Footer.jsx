import { Link } from 'react-router-dom';

import footer from 'components/Footer/Footer.module.scss';

const Footer = ({ getCursorState }) => {
  return (
    <footer className={footer.wrap}>
      <div className={footer.item}>
        <div className={footer['item__link-wrap']}>
          <Link
            to="project"
            className={footer.item__link}
            onMouseEnter={() => getCursorState(true)}
            onMouseLeave={() => getCursorState(false)}
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            className={footer.item__link}
            onMouseEnter={() => getCursorState(true)}
            onMouseLeave={() => getCursorState(false)}
          >
            CONTACT
          </Link>
        </div>
        <div className={footer.item__copy}>&copy; JISUN LEE 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
