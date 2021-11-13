// Example: Input: [25,30] [2,19] [14, 23] [4,8]  Output: [2,23] [25,30]

const merge = (intervals: [number, number][]) => {
  const mergedIntervals: [number, number][] = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = 1; j < intervals.length; j++) {
      if (intervals[i][0] <= intervals[j][1]) {
        mergedIntervals.push([intervals[i][0], intervals[j][1]]);
      }
    }
  }

  return mergedIntervals;
};

const result = merge([
  [1, 3],
  [2, 4],
]);

console.log(result);
