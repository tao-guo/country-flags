import React from 'react';

function UnionFlag(props) {
  return (
    <div className="flag--uk">
      <div className="white row"></div>
      <div className="white col"></div>
      <div className="white diangle left">
        <div className="red left row"></div>
        <div className="red right row"></div>
      </div>
      <div className="white diangle right">
        <div className="red left row"></div>
        <div className="red right row"></div>
      </div>
      <div className="red row"></div>
      <div className="red col"></div>
    </div>
  );
}
export default UnionFlag;
