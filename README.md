# Setup

This program is written in TypeScript, and is used to merge overlapping intervals

Requirements:

- Node.js: v16.13.0
- NPM: 8.1.3

This program can be executed with example Input:

`npm run start`

# Tests

To run Tests use:

`npm run test`

# Memory Usage

Memory Usage for the example Input:

- rss, 172.867584 MB
- heapTotal, 98.258944 MB
- heapUsed, 72.079048 MB
- external, 1.156908 MB
- arrayBuffers, 0.049338 MB

Code for reference in `memoryUsage.ts`

Memory Usage can be tested by running:

`npm run memory_usage`

# Execution Time

Execution Time for the example Input:

execution_time: 1.518ms

Execution Time can be tested by running:

`npm run execution_time`

# Stability

To ensure stability very large Arrays should be split into two streams, and merged back together

# Time needed

- 13.11.21: 18.00 - 19:00
- 14.11.21: 17.00 - 19.00
- 15.11.21: 16.30 - 17.30

Total: approx. 4h
