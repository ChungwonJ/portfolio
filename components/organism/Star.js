import React, { useState, useEffect } from 'react';

function Star() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const updateStars = () => {
      const newStars = [];
      for (let i = 0; i < 30; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 12,
          time: Math.random() * 8
        });
      }
      setStars(newStars);
    };

    updateStars();

    window.addEventListener('resize', updateStars);
    return () => {
      window.removeEventListener('resize', updateStars);
    };
  }, []);

  return (
    <div className='starBackGround'>
      {stars.map(star => (
        <div
          key={`${star.x}-${star.y}`}
          style={{
            position: 'absolute',
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor:  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            backgroundColor : 'white',
            filter: 'blur(3px)',
            animation: `blink ${star.time}s steps(5) infinite`
          }}
        />
      ))}
    </div>
  );
}

export default Star;