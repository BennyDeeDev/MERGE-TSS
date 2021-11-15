import { merge } from "./merge";

describe("merge", () => {
  test("should return the intervals if its only one", () => {
    const result = merge([[25, 30]]);

    expect(result).toStrictEqual([[25, 30]]);
  });

  test("should test example", () => {
    const result = merge([
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
    ]);

    expect(result).toStrictEqual([
      [2, 23],
      [25, 30],
    ]);
  });

  test("should test simple example", () => {
    const result = merge([
      [1, 3],
      [2, 4],
      [5, 7],
      [6, 8],
    ]);

    expect(result).toStrictEqual([
      [1, 4],
      [5, 8],
    ]);
  });

  test("should test for negative intervals", () => {
    const result = merge([
      [-4, 3],
      [-6, 4],
      [5, 7],
      [6, 8],
    ]);

    expect(result).toStrictEqual([
      [-6, 4],
      [5, 8],
    ]);
  });
});
