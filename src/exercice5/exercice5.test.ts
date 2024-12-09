import { it, expect, describe } from "vitest";
import { fizzBuzz } from "./exercice5";

describe("FizzBuzz", () => {
  it("Should return the number if it is not a multiple of 3 or 5", () => {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("Should return Fizz if the number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("Should return Buzz if the number is a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("Should return FizzBuzz if the number is a multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
