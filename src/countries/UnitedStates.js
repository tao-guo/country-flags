import React from 'react';

function FlagOfUS(props) {
  const width = props.width;
  const height = props.width / 1.9;

  const containerSize = {
    width: width,
    height: height
  };

  const stripeStyles = new Array(13).fill(null).map((v,i) => {
    if ((i % 2) === 0) { // red rows
      return {
        background: '#B22234',
        width: width,
        height: height / 13
      };
    } else { // white rows
      return {
        background:'#FFFFFF',
        width: width,
        height: height / 13
      };
    }
  });

  const stars = new Array(9).fill(null).map((v, i) => {
    return (i % 2 === 0) ? new Array(6).fill('★') : new Array(5).fill('★');
  });

  const hUnit = height * 0.0538;
  const wUnit = height * 0.0633;
  const blueAreaStyle = {
    background: '#3C3B6E',
    position: 'absolute',
    height: '53.85%',
    width: '40%',
    top: 0,
    left: 0
  };

  const blueAreaStarsStyle = {
    position: 'relative',
    bottom: hUnit / 2,
    right: wUnit / 2
  }

  function starStyle(row, col) {
    const size = height * 0.0616;
    return {
      textAlign: 'center',
      color: 'white',
      position: 'absolute',
      top: hUnit * (row + 1),
      left: wUnit * (col*2 + 1 + row % 2),
      fontSize:  size,
      lineHeight: '100%',
      height: size,
      width: size
    }
  }

  return (
    <div className="flag-container" style={containerSize}>
      {stripeStyles.map((stripe, i) =>
        <div style={stripe} key={i}></div>
      )}
      <div className="blue-area" style={blueAreaStyle}>
        <div className="blue-area-stars" style={blueAreaStarsStyle}>
          {stars.map((rowStars, row) =>
            rowStars.map((star, col) =>
              <div style={starStyle(row, col)}>{star}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
FlagOfUS.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.9) * 0.8
};

export default FlagOfUS;