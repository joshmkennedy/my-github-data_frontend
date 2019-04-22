import React from "react";

import maxValue from "../helperFunctions/maxValue";

const PolyLine = ({ dataset, viewBox }) => {
  const { w, h } = viewBox;

  //gets the miximum value in an array

  //gets the minimum value in an array
  const min = dataset =>
    dataset.reduce((min, y) => (y < min ? y : min), dataset[0]);

  const yMax = maxValue(dataset);

  const data = dataset.map((y, x) => {
    const xVal = Math.floor((x / (dataset.length - 1)) * w);
    const yVal = Math.floor(h - (y / yMax) * h - 1);

    return `${xVal},${yVal};`;
  }); //creates an array of string chart values that are x,y cordinates to be plotted

  const joined = data
    .join()
    .replace(/;,/g, " ")
    .replace(";", ""); // creates a string of values from the array

  return <polyline fill='none' stroke='red' strokeWidth='1' points={joined} />;
};

export default PolyLine;
