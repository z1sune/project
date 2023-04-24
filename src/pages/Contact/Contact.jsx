import { useEffect } from 'react';

const Contact = ({ getLink }) => {
  // 홈으로 이동
  useEffect(() => {
    getLink('/');
  }, []);

  return <div />;
};

export default Contact;
