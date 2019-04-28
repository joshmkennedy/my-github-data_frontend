import React from "react";
import styled from "styled-components";

import maxValue from "../helperFunctions/maxValue";
import Bar from "../graphComponents/Bar";

const BarGraph = ({ className, dataset, repoName }) => {
  const viewBox = {
    w: 400,
    h: 200,
  };
  const { w, h } = viewBox;

  const barMax = maxValue(dataset);
  const barHeight = Math.floor(h / (dataset.length - 1) - h / 100 - w / 100);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className}>
      <g className='grid grid-x'>
        <line x1='0' x2={w} y1={h} y2={h} />
      </g>
      <g className='grid grid-y'>
        <line x1='0' x2='0' y1='0' y2={h} />
      </g>

      {dataset.map((data, index) => {
        const barWidth = Math.floor((data / barMax) * w);

        const barY = Math.floor((h / dataset.length) * index);
        const tX = 40;
        const tY = barY + 40;
        const dY = 0;

        const name = { tX, tY, dY, repoName: repoName[index] };
        const rect = { barHeight, barWidth, barY };

        return (
          <Bar
            key={index}
            className='bar'
            name={name}
            data={data}
            rect={rect}
            viewBox={viewBox}
          />
        );
      })}
    </svg>
  );
};

export default styled(BarGraph)`
  width: 100%;
  height: auto;
  background: white;
  .grid {
    stroke: black;
    stroke-width: 3;
  }
  .increment-line {
    stroke: black;
    stroke-width: 0.2;
  }
  .bar {
    text {
      fill: white;
      font-size: 10px;
    }
  }
`;
