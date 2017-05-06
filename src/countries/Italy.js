import React from 'react';

function FlagOfItaly(props) {
  const containerSize = {
    width: props.width,
    height: props.width/1.5,
  };

  const colors = ['#0055A4', '#FFFFFF', '#EF4135'];
  const colStyles = new Array(3).fill(null).map((v, i) => {
    return {
      display: 'inline-block',
      width: '33.33%',
      height: '100%',
      background: colors[i]
    }
  });

  return (
    <div className="flag-container italy" style={containerSize}>
      {colStyles.map((v, i) =>
        <div style={v} key={i}></div>
      )}
    </div>
  );
}

FlagOfItaly.defaultProps = {
  width: Math.min(window.innerWidth, window.innerHeight*1.5) * 0.8
};
export default FlagOfItaly;
 