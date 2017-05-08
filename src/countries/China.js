import React from 'react';

function FlagOfChina(props) {
  const unit = props.width / 32;
  const styles = [
    {left: unit*2, top: unit*2},
    {left: unit*9, top: unit*1, transform: 'rotate(-120.96deg)'},
    {left: unit*11, top: unit*3, transform: 'rotate(-98.13deg)'},
    {left: unit*11, top: unit*6, transform: 'rotate(-74.055deg)'},
    {left: unit*9, top: unit*8, transform: 'rotate(-54.34deg)'},
  ];
  return (
      <div className="flag--china">
        {styles.map((style,i) =>
          <div className={i ? "star small" : "star big"} key={i} style={style}>★</div>
        )}
      </div>
  );
}
export default FlagOfChina;
