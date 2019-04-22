import React from "react";

const Bar = ({ text, rect, viewBox }) => {
  const { w, h } = viewBox;
  const { barHeight, barWidth, barY } = rect;
  /* const { tX, tY, dY, repoTitle } = text; */
  const neverZero = (num, multiplier) => {
    return num !== 0 ? num : num + multiplier / 100;
  };
  const width = neverZero(barWidth, w);
  return (
    <g>
      <rect width={width} height={barHeight} y={barY} fill='grey' />
      {/* <text x={tX} y={tY} dy={dY}>
        {repoTitle}
      </text> */}
    </g>
  );
};

export default Bar;
