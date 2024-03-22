import React, { useState, useEffect } from 'react';

function MovingStar() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const updateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 12,
          time: Math.random() * 8,
          speedX: Math.random() * 2 - 1, // x축으로 움직이는 속도
          speedY: Math.random() * 2 - 1, // y축으로 움직이는 속도
        });
      }
      setStars(newStars);
    };
    updateStars();
    window.addEventListener('resize', updateStars);
    const interval = setInterval(() => {
      setStars(stars => stars.map(star => ({
        ...star,
        x: star.x + star.speedX, // x축으로 움직임
        y: star.y + star.speedY, // y축으로 움직임
      })));
    }, 50);
    return () => {
      window.removeEventListener('resize', updateStars);
      clearInterval(interval);
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
            backgroundColor: 'white',
            borderRadius: '100%',
            filter: 'blur(3px)',
            animation: `blink ${star.time}s steps(5) infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default MovingStar;
