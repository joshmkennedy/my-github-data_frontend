import React from "react";
import styled from "styled-components";

import XAxisLines from "../graphComponents/XAxisLines";
import YAxisLines from "../graphComponents/YAxisLines";
import PolyLine from "../graphComponents/PolyLine";

const LineGraph = ({ data, className, xLabels }) => {
  const viewBox = {
    w: 400,
    h: 100,
  };
  const { w, h } = viewBox;
  const threeLabels = arr => [
    arr[0],
    arr[Math.floor(arr.length / 2)],
    arr[arr.length - 1],
  ];

  const outputLabels = threeLabels(xLabels);
  const offsetByOne = num => num * 0.1;
  return (
    <svg viewBox={`0 0 ${w} ${h + offsetByOne(h)}`} className={className}>
      <g className='grid grid-x'>
        <line x1='0' x2={w} y1={h} y2={h} />
      </g>
      <g className='grid grid-y'>
        <line x1='0' x2='0' y1='0' y2={h} />
      </g>
      <XAxisLines dataset={data} viewBox={viewBox} />
      <YAxisLines dataset={data} viewBox={viewBox} />
      <PolyLine dataset={data} viewBox={viewBox} />
      <g>
        {outputLabels.map((label, index) => {
          const xPos =
            index !== outputLabels.length - 1
              ? (index * w) / (outputLabels.length - 1)
              : (index * w) / (outputLabels.length - 1) - offsetByOne(w);
          return (
            <text key={label} x={xPos} y={h + offsetByOne(h)}>
              {label}
            </text>
          );
        })}
      </g>
    </svg>
  );
};

export default styled(LineGraph)`
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
  text {
    font-size: 0.5em;
  }
`;
