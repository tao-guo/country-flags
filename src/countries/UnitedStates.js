import React from 'react';

function FlagOfUS(props) {
  const starsStyle = new Array(9).fill(null).map((starRow, row) => {
    const height = props.width / 1.9;
    const hUnit = height * 0.0538;
    const wUnit = height * 0.0633;
    const nStars = (row % 2 === 0) ? 6 : 5;
    return new Array(nStars).fill(null).map((star, col) => {
      return {
        top: hUnit * (row + 1) - hUnit/2,
        left: wUnit * (col*2 + 1 + row % 2) - wUnit/2
      }
    })
  });

  return (
    <div className="flag--us">
      {starsStyle.map((rows, row) =>
        rows.map((style, col) =>
          <div className="star" style={style}>★</div>
        )
      )}
    </div>
  );
}
export default FlagOfUS;