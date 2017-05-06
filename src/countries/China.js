import React from 'react';

function FlagOfChina(props) {
  const positions = [
    [2, 2], // left, top
    [9, 1],
    [11, 3],
    [11, 6],
    [9, 8]
  ];
  const unit = props.width / 32;
  const containerSize = {
    width: unit * 32,
    height: unit * 20,
    background: 'red',
  };
  const stars = new Array(5).fill('★');

  function starStyle(i) {
    let size = (i === 0) ? unit * 6: unit * 2;
    return {
      position: 'absolute',
      color: 'yellow',
      textAlign: 'center',
      fontSize: size,
      width: size,
      height: size,
      left: positions[i][0] * unit,
      top: positions[i][1] * unit
    };
  }

  return (
      <div className="flag-container china" style={containerSize}>
        {stars.map((v,i) =>
          <div key={i} style={starStyle(i)}>{v}</div>
        )}
      </div>
  );
}
FlagOfChina.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.6) * 0.8
};

export default FlagOfChina;