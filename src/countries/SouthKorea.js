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

  const taegeukStyle = {
    position: 'absolute',
    left: unit,
    top: unit * 0.75,
    transform: `rotate(${deg}deg)`,
    overflow: 'hidden',
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

  const trigramStyle = {
    position: 'absolute',
    width: unit / 2,
    height: unit / 3,
  }

  const tdeg=Math.atan(3/2)/Math.PI*180;
  const leftTrigStyle = {
    position: 'absolute',
    top: unit,
    left: unit * 1.5,
    transform: `rotate(${tdeg}deg)`,
  }
  const rightTrigStyle = {
    position: 'absolute',
    top: unit,
    left: unit * 1.5,
    transform: `rotate(-${tdeg}deg)`,
  }

  return (
      <div className="flag--south-korea" style={containerStyle}>
        <div style={circleStyle}>
          <div style={bigRedStyle}></div>
          <div style={bigBlueStyle}></div>
        </div>
        <div style={taegeukStyle}>
          <div style={smallRedStyle}></div>
          <div style={smallBlueStyle}></div>
        </div>
          <div style={leftTrigStyle}>
            <div style={{...trigramStyle, left: -unit*0.25, top: -unit*1.0833}}>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{position: 'relative', zIndex: 99, height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{zIndex: 0, height: unit/3, width: unit/24, position: 'absolute', left: (1/4-1/48)*unit, top: 0, background: 'white'}}> </div>
            </div>
            <div style={{...trigramStyle, left: -unit*0.25, bottom: -unit*1.0833}}>
              <div style={{zIndex: 2, position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{zIndex: 2, position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{zIndex: 1, height: unit/3, width: unit/24, position: 'absolute', left: (1/4-1/48)*unit, top: 0, background: 'white'}}> </div>
            </div>
          </div>
          <div style={rightTrigStyle}>
            <div style={{...trigramStyle, left: -unit*0.25, top: -unit*1.0833}}>
              <div style={{height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{zIndex: -1, height: unit/3, width: unit/24, position: 'absolute', left: (1/4-1/48)*unit, top: 0, background: 'white'}}> </div>
            </div>
            <div style={{...trigramStyle, left: -unit*0.25, bottom: -unit*1.0833}}>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{position: 'relative', height: unit/12, background: 'black', margin: unit/48}}> </div>
              <div style={{zIndex: 1, height: unit/3, width: unit/24, position: 'absolute', left: (1/4-1/48)*unit, top: 0, background: 'white'}}> </div>
            </div>
          </div>
      </div>
  );
}
FlagOfSouthKorea.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.5) * 0.8
};

export default FlagOfSouthKorea;
