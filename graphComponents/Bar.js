import React from "react";

const Bar = ({ name, rect, viewBox, data }) => {
  const { w, h } = viewBox;
  const { barHeight, barWidth, barY } = rect;
  const { tX, tY, dY, repoName } = name;
  const neverZero = (num, multiplier) => {
    return num !== 0 ? num : num + multiplier / 100;
  };
  const width = neverZero(barWidth, w);
  return (
    <g>
      <rect
        width={width}
        height={Math.floor(barHeight - barHeight * 0.4)}
        y={barY}
        fill='grey'
      />
      <text x={tX} y={tY} dy={dY}>
        {repoName}
      </text>
      <text x={barWidth - 50} y={tY} dy={dY}>
        {data}
      </text>
    </g>
  );
};

export default Bar;
