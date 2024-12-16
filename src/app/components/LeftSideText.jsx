import React from 'react'

function LeftSideText({text}) {
  return (
    <span
    className="rotate-text"
    style={{
      position: "absolute",
      transform: "rotate(270deg)",
      padding: "0px 10px",
      top: "75%",
      left: "0px",
      backgroundColor: "transparent",
    }}
  >
    <p className="m-0 p-0" style={{fontSize: "small"}}>{text}</p>
  </span>
  
  )
}

export default LeftSideText