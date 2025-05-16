const add = (str) => {
  if (!str?.trim()) {
    return 0;
  }

  if (!isNaN(str?.trim())) {
    let numToReturn = parseInt(str?.trim() || 0) || 0;

    if (numToReturn < 0) {
      throw new Error(`negative numbers not allowed: ${numToReturn}`);
    }

    return numToReturn;
  }

  let delimiters = /[,\n]/;
  let numsToAdd = str;

  if (str?.startsWith("//")) {
    let customDelimiter = str?.charAt(2); // delimiter is at 3rd position, so taking 2nd index value
    numsToAdd = str?.substring(4); // removing 2x'/', 1x'delimiter', and 1x'\n'

    delimiters = new RegExp(`[,\n${customDelimiter}]`);
  }

  let nums = numsToAdd
    .split(delimiters)
    .map((num) => parseInt(num?.trim() || 0) || 0);

  let negativeNums = nums?.filter((num) => num < 0);

  if (negativeNums?.length) {
    throw new Error(
      `negative numbers not allowed: ${negativeNums?.join(", ")}`
    );
  }

  return nums.reduce((prev, curr) => prev + curr, 0);
};

module.exports = { add };
