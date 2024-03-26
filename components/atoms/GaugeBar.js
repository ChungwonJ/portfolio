import React from 'react';

const GaugeBar = ({ value }) => {
  const percentage = (value / 100) * 100;

  return (
    <>
      <div className='gaugeBar'>
        <div
          style={{
            height: '20px',
            width: `${percentage}%`,
            backgroundColor: percentage >= 100 ? '#4caf50' : '#00AE68',
            borderRadius: '8px',
            margin : '0'
          }}
        />
      </div>
    </>
  );
};

export default GaugeBar;