import React from "react";

const YAxisLines = ({ viewBox, dataset }) => {
  const { w, h } = viewBox;

  const unit = Math.floor((1 / (dataset.length - 1)) * w); //how far apart lines should be
  const heightIncrementTimes = h / unit; //howmany times to run
  //for loops dont work in jsx need a better solution
  const createYAxisLines = () => {
    const lines = [];
    for (let i = 0; i < heightIncrementTimes; i++) {
      lines.push(
        <line
          className='increment-line'
          key={i}
          x1={0}
          x2={w}
          y1={Math.floor(i * unit)}
          y2={Math.floor(i * unit)}
        />
      );
    }
    return lines;
  };

  return <g>{createYAxisLines()}</g>;
};
export default YAxisLines;
