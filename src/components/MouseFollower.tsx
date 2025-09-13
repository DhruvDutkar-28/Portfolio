import React, { useEffect, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractiveElement = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a');
      
      setIsHovering(!!isInteractiveElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed z-50 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'opacity 0.2s ease'
        }}
      >
        <div
          className={`rounded-full mix-blend-difference transition-all duration-200 ${
            isClicking ? 'bg-white scale-90 opacity-80' : 'bg-white opacity-70'
          } ${isHovering ? 'w-8 h-8' : 'w-4 h-4'}`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
      {isHovering && (
        <div 
          className="fixed z-50 w-10 h-10 rounded-full border-2 border-blue-500 mix-blend-difference pointer-events-none"
          style={{
            transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
            transition: 'transform 0.1s ease-out, width 0.2s ease, height 0.2s ease'
          }}
        ></div>
      )}
    </>
  );
};

export default MouseFollower;