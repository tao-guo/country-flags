import React from 'react';

function FlagOfRussia(props) {
  const containerSize = {
    width: props.width,
    height: props.width*2/3,
  };

  const colors = ['#FFFFFF', '#0039A6', '#D52B1E'];
  const colStyles = new Array(3).fill(null).map((v, i) => {
    return {
      height: '33.33%',
      width: '100%',
      background: colors[i]
    }
  });

  return (
    <div className="flag-container russia" style={containerSize}>
      {colStyles.map((v, i) =>
        <div style={v} key={i}></div>
      )}
    </div>
  );
}

FlagOfRussia.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.5) * 0.8
};
export default FlagOfRussia;
