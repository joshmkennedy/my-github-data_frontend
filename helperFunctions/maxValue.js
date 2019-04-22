const maxvalue = dataset =>
  dataset.reduce((max, y) => (y > max ? y : max), dataset[0]);

export default maxvalue;
