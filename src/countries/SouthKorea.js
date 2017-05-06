import React from 'react';

function FlagOfSouthKorea(props) {
  const width = props.width;
  const height = props.width / 1.5;
  const containerStyle = {
    width: width,
    height: height,
    background: '#FFFFFF'
  };
  const unit = height / 2;

  const deg=Math.atan(2/3)/Math.PI*180;
  const circleStyle = {
    position: 'absolute',
    left: unit,
    top: unit * 0.5,
    width: unit,
    height: unit,
    borderRadius: '50%',
    transform: `rotate(${deg}deg)`,
    overflow: 'hidden',
    background: '#003478'
  };

  const bigRedStyle = {
    width: unit,
    height: unit / 2,
    background: '#C60C30'
  };

  const bigBlueStyle = {
    width: unit,
    height: unit / 2,
    background: '#003478'
  };

  const leftDiagStyle = {
    position: 'absolute',
    left: unit,
    top: unit * 0.75,
    transform: `rotate(${deg}deg)`,
    overflow: 'hidden',
  };

  const rightDiagStyle = {
  };

  const smallRedStyle = {
    display: 'inline-block',
    width: unit / 2,
    height: unit / 2,
    background: '#C60C30',
    borderRadius: '50%'
  };

  const smallBlueStyle = {
    display: 'inline-block',
    width: unit / 2,
    height: unit / 2,
    background: '#003478',
    borderRadius: '50%'
  }

  return (
      <div className="flag-container south-korea" style={containerStyle}>
        <div style={circleStyle}>
          <div style={bigRedStyle}></div>
          <div style={bigBlueStyle}></div>
        </div>
        <div style={leftDiagStyle}>
          <div style={smallRedStyle}></div>
          <div style={smallBlueStyle}></div>
        </div>
        <div style={rightDiagStyle}></div>
      </div>
  );
}
FlagOfSouthKorea.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.5) * 0.8
};

export default FlagOfSouthKorea;
