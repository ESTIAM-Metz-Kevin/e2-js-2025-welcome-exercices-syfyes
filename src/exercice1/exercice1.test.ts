import { it, expect } from "vitest";
import { jeCompteLesLettres, estUnPalindrome, inverseLaChaineDeCaractere } from "./exercice1";

it("Should reverse the string", () => {
  expect(inverseLaChaineDeCaractere("hello")).toBe("olleh");
  expect(inverseLaChaineDeCaractere("world")).toBe("dlrow");
});

it("Should count the letter", () => {
  expect(jeCompteLesLettres("hello", "l")).toBe(2);
  expect(jeCompteLesLettres("javascript", "z")).toBe(0);
  expect(jeCompteLesLettres("world", "o")).toBe(1);
});

it("Should check if a string is a palindrome", () => {
  expect(estUnPalindrome("hello")).toBe(false);
  expect(estUnPalindrome("madam")).toBe(true);
});
