import React from "react";

const XAxisLines = ({ viewBox, dataset }) => {
  const { w, h } = viewBox;
  return (
    <g>
      {dataset.map((data, index) => {
        const x1 = Math.floor((index / (dataset.length - 1)) * w);
        const x2 = Math.floor((index / (dataset.length - 1)) * w);
        const y1 = h;
        const y2 = 0;

        return (
          <line
            className='increment-line'
            key={index}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
          />
        );
      })}
    </g>
  );
};
export default XAxisLines;
