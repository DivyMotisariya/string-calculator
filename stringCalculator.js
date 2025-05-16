const add = (str) => {
  if (!str?.trim()) {
    return 0;
  }

  return parseInt(str || 0);
};

module.exports = { add };
