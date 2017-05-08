import React from 'react';

function FlagOfChina(props) {
  const unit = props.width / 32;
  const positions = [
    [2, 2], // left, top
    [9, 1],
    [11, 3],
    [11, 6],
    [9, 8]
  ];
  return (
      <div className="flag--china">
        {positions.map((pos,i) =>
          <div className={i ? "star small" : "star big"} key={i} style={{left: unit * pos[0],top: unit * pos[1]}}>★</div>
        )}
      </div>
  );
}
export default FlagOfChina;
