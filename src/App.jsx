import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CursorProvider from 'utils/CursorProvider';

import Home from 'components/Home/Home';
import Footer from 'components/Footer/Footer';
import Aim from 'components/Aim/Aim';

import Info from 'pages/Info/Info';
import Project from 'pages/Project/Project';
import Contact from 'pages/Contact/Contact';

import 'styles/Global.scss';

const App = () => {
  const [cursor, setCursor] = useState(false);
  const [link, setLink] = useState('info');

  const getCursorState = val => setCursor(val);
  const getLink = val => setLink(val);

  return (
    <>
      <CursorProvider cursor={cursor} />
      <main className="main">
        <Aim link={link} getCursorState={getCursorState} />
        <Routes>
          <Route path="/" element={<Home getLink={getLink} getCursorState={getCursorState} />} />
          <Route path="info" element={<Info getLink={getLink} />} />
          <Route path="project" element={<Project getLink={getLink} getCursorState={getCursorState} />} />
          <Route path="contact" element={<Contact getLink={getLink} />} />
        </Routes>
      </main>
      <Footer getCursorState={getCursorState} />
    </>
  );
};

export default App;
