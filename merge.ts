// Example: Input: [25,30] [2,19] [14, 23] [4,8]  Output: [2,23] [25,30]

const merge = (intervals: [number, number][]) => {
  const mergedIntervals: [number, number][] = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    // If min from first interval is smaller than the max of the second interval they overlap
    if (intervals[i][0] <= intervals[i + 1][1]) {
      mergedIntervals.push([intervals[i][0], intervals[i + 1][1]]);
    }
  }

  return mergedIntervals;
};

const result = merge([
  [25, 30],
  [2, 19],
  [14, 23],
  [4, 8],
]);

console.log(result);
