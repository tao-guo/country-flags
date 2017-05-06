import React from 'react';

function FlagOfGermany(props) {
  const containerSize = {
    width: props.width,
    height: props.width*3/5,
  };

  const colors = ['#000000', '#FF0000', '#FFCC00'];
  const colStyles = new Array(3).fill(null).map((v, i) => {
    return {
      height: '33.33%',
      width: '100%',
      background: colors[i]
    }
  });

  return (
    <div className="flag-container germany" style={containerSize}>
      {colStyles.map((v, i) =>
        <div style={v} key={i}></div>
      )}
    </div>
  );
}

FlagOfGermany.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*5/3) * 0.8
};
export default FlagOfGermany;
