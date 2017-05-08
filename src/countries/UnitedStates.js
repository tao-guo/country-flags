import React from 'react';

function FlagOfUS(props) {
  const width = props.width;
  const height = props.width / 1.9;

  const stripeClasses = new Array(13).fill(null).map((v,i) => {
    if ((i % 2) === 0) { // red rows
      return "red-stripe";
    } else { // white rows
      return "white-stripe";
    }
  });

  const stars = new Array(9).fill(null).map((v, i) => {
    return (i % 2 === 0) ? new Array(6).fill('★') : new Array(5).fill('★');
  });

  function starStyle(row, col) {
    const hUnit = height * 0.0538;
    const wUnit = height * 0.0633;
    return {
      top: hUnit * (row + 1),
      left: wUnit * (col*2 + 1 + row % 2),
    }
  }

  return (
    <div className="flag--us">
      {stripeClasses.map((c, i) =>
        <div className={c} key={i}></div>
      )}
      <div className="blue-area">
        <div className="blue-area-stars">
          {stars.map((rowStars, row) =>
            rowStars.map((star, col) =>
              <div className="star" style={starStyle(row, col)}>{star}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default FlagOfUS;