import React from "react";

function Banner({ className, children }) {
console.log('banner');
  return (
    <div className={`banner ${className}`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
