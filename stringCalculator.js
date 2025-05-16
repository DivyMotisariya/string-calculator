const DEFAULT_DELIM = /[,\n]/;
const CUSTOM_DELIM_PREFIX = "//";

const add = (str) => {
  if (!str?.trim()) {
    return 0;
  }

  if (!isNaN(str?.trim())) {
    let numToReturn = parseInt(str?.trim() || 0) || 0;

    validateNegativeNum([numToReturn]);

    return numToReturn;
  }

  let { delimiters, numsToAdd } = parseInputs(str);

  let nums = parseNums(numsToAdd, delimiters);

  validateNegativeNum(nums);

  return calculateSum(nums);
};

const parseInputs = (inputStr) => {
  if (inputStr?.startsWith(CUSTOM_DELIM_PREFIX)) {
    let customDelimiter = inputStr?.charAt(2); // delimiter is at 3rd position, so taking 2nd index value
    let numsToAdd = inputStr?.substring(4); // removing 2x'/', 1x'delimiter', and 1x'\n'
    let delimiters = new RegExp(`[,\n${customDelimiter}]`);

    return {
      delimiters,
      numsToAdd,
    };
  }

  return {
    delimiters: DEFAULT_DELIM,
    numsToAdd: inputStr,
  };
};

const parseNums = (numsToAdd, delimiters) => {
  return numsToAdd
    .split(delimiters)
    .map((num) => parseInt(num?.trim() || 0) || 0);
};

const validateNegativeNum = (numsToAdd) => {
  let negativeNums = numsToAdd?.filter((num) => num < 0);

  if (negativeNums?.length) {
    throw new Error(
      `negative numbers not allowed: ${negativeNums?.join(", ")}`
    );
  }
};

const calculateSum = (numsToAdd) => {
  let finalNums = numsToAdd?.filter((num) => num <= 1000);
  return finalNums?.reduce((prev, curr) => prev + curr, 0) || 0;
};

module.exports = { add };
