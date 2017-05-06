import React from 'react';

function UnionFlag(props) {
  const width = props.width;
  const height = props.width / 2;
  const unit = width / 60;

  const containerStyle = {
    width: width,
    height: height,
    background: '#002776',
    position: 'relative',
    overflow: 'hidden'
  };

  const whiteStyle = {
    background: '#FFFFFF',
    position: 'absolute',
  };

  const whiteRow = {
    ...whiteStyle,
    zIndex: 2,
    height: unit * 10,
    width: width,
    top: unit * 10,
    left: 0
  };

  const whiteCol = {
    ...whiteStyle,
    zIndex: 2,
    height: height,
    width: unit * 10,
    top: 0,
    left: unit * 25
  };

  const deg=Math.atan(0.5)/Math.PI*180;

  const whiteLeft = {
    ...whiteStyle,
    zIndex: 1,
    height: unit * 6,
    width: unit * 67.08,
    top: unit * 12,
    left: - unit * 7.08 / 2,
    transform: `rotate(-${deg}deg)`
  };

  const whiteRight = {
    ...whiteStyle,
    zIndex: 1,
    height: unit * 6,
    width: unit * 67.08,
    top: unit * 12,
    left: - unit * 7.08 / 2,
    transform: `rotate(${deg}deg)`
  };

  const redStyle = {
    background: '#C60C30',
    position: 'absolute',
  };

  const redLeftRow = {
    ...redStyle,
    height: unit * 2,
    width: unit * 67.08 / 2,
    top: unit * 3,
    left: 0
  };

  const redRightRow = {
    ...redStyle,
    height: unit * 2,
    width: unit * 67.08 / 2,
    top: unit,
    left: unit * 30 + unit * 7.08 / 2,
  };

  const redRow = {
    ...redStyle,
    zIndex: 4,
    height: unit * 6,
    width: width,
    top: unit * 12,
    left: 0
  }

  const redCol = {
    ...redStyle,
    zIndex: 4,
    height: height,
    width: unit * 6,
    top: 0,
    left: unit * 27
  }

  return (
    <div className="flag-container uk" style={containerStyle}>
      <div style={whiteRow}></div>
      <div style={whiteCol}></div>
      <div style={whiteLeft}>
        <div style={redLeftRow}></div>
        <div style={redRightRow}></div>
      </div>
      <div style={whiteRight}>
        <div style={redLeftRow}></div>
        <div style={redRightRow}></div>
      </div>
      <div style={redRow}></div>
      <div style={redCol}></div>
    </div>
  );
}
UnionFlag.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*2) * 0.8
};

export default UnionFlag;
