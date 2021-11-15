import { memoryUsage } from "./memoryUsage";
// Example: Input: [25,30] [2,19] [14, 23] [4,8]  Output: [2,23] [25,30]

if (process.env.NODE_ENV === "execution_time") {
  console.time("execution_time");
}

const merge = (intervals: [number, number][]) => {
  // edge case
  if (intervals.length < 2) return intervals;

  // sort array so we can compare intervals
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals: [number, number][] = [];

  // start with first interval and keep adding overlapping ones
  let startingInterval = intervals[0];

  // start counting from 1 because first Interval has already been added
  for (let i = 1; i < intervals.length; i++) {
    // when first number of starting interval is smaller or equal than the second number of the current interval then it overlaps
    // example: [2, 19], [4, 8] => 4 <= 19 => overlap
    // else: if no overlap, save the latest (merged) interval, and set the current (new) interval to startingInterval
    if (intervals[i][0] <= startingInterval[1]) {
      // merge intervals, determine the largest number of both ending numbers of the interval and add it
      startingInterval = [
        startingInterval[0],
        Math.max(startingInterval[1], intervals[i][1]),
      ];
    } else {
      mergedIntervals.push(startingInterval);
      startingInterval = intervals[i];
    }
  }

  // if all intervals have been overlapping, the array is empty so it needs to be filled
  // - otherwise append the not overlapping interval to the array
  mergedIntervals.push(startingInterval);

  return mergedIntervals;
};

const result = merge([
  [25, 30],
  [2, 19],
  [14, 23],
  [4, 8],
]);

console.log({ result });

if (process.env.NODE_ENV === "execution_time") {
  console.timeEnd("execution_time");
}

if (process.env.NODE_ENV === "memory_usage") {
  memoryUsage();
}
