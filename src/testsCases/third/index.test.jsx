import { describe, expect, it } from 'vitest';
import divide from "./index";

describe("Third test case", () => {
  it("should calculate the result of the division between two numbers", () => {
    const a = 20;
    const b = 5;

    const result = divide(a, b);

    expect(result).toBe(4);
  });
});





