import { useRef, useState, useEffect } from 'react';
import cn from 'classnames';

const CursorProvider = ({ cursor }) => {
  const ref = useRef('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    const { clientX: x, clientY: y } = e;

    setMousePosition({ x, y });
  };

  // pos
  const { x, y } = mousePosition;

  useEffect(() => {
    document.addEventListener('mousemove', e => handleMouseMove(e));
  });

  return (
    <div ref={ref} className={cn('cursor', { 'cursor--active': cursor })} style={{ transform: `translate(${x}px, ${y}px)` }}>
      <span className="cursor__edge cursor__edge--1" />
      <span className="cursor__edge cursor__edge--2" />
      <span className="cursor__edge cursor__edge--3" />
      <span className="cursor__edge cursor__edge--4" />
    </div>
  );
};

export default CursorProvider;
