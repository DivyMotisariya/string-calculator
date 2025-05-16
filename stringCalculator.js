const add = (str) => {
  if (!str?.trim()) {
    return 0;
  }

  if (!isNaN(str?.trim())) {
    return parseInt(str?.trim() || 0) || 0;
  }

  return str
    .split(",")
    .map((num) => parseInt(num?.trim() || 0) || 0)
    .reduce((prev, curr) => prev + curr, 0);
};

module.exports = { add };
