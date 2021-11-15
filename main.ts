import { memoryUsage } from "./memoryUsage";
import { merge } from "./merge";

// Example: Input: [25,30] [2,19] [14, 23] [4,8]  Output: [2,23] [25,30]

if (process.env.NODE_ENV === "execution_time") {
  console.time("execution_time");
}

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
