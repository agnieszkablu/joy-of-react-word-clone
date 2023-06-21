import React from "react";

function Banner({ className, children }) {
  return (
    <div className={`banner ${className}`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
