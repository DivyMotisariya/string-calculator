const add = (str) => {
  if (!str?.trim()) {
    return 0;
  }

  if (!isNaN(str?.trim())) {
    return parseInt(str?.trim() || 0) || 0;
  }

  let delimiters = /[,\n]/;
  let numsToAdd = str;

  if (str?.startsWith("//")) {
    let customDelimiter = str?.charAt(2); // delimiter is at 3rd position, so taking 2nd index value
    numsToAdd = str?.substring(4); // removing 2x'/', 1x'delimiter', and 1x'\n'

    delimiters = new RegExp(`[,\n${customDelimiter}]`);
  }

  return numsToAdd
    .split(delimiters)
    .map((num) => parseInt(num?.trim() || 0) || 0)
    .reduce((prev, curr) => prev + curr, 0);
};

module.exports = { add };
