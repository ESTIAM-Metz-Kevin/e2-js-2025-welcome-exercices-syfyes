import { it, expect } from "vitest";
import { trouverLeNombreMaximum, seulementLesNombresPairs, sommeDesNombres } from "./exercice2";

it("Should filter only even numbers", () => {
  expect(seulementLesNombresPairs([1, 3, 5, 7, 9])).toEqual([]);
  expect(seulementLesNombresPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
});

it("Should find the maximum number", () => {
  expect(trouverLeNombreMaximum([1, 3, 5, 7, 9])).toEqual(9);
  expect(trouverLeNombreMaximum([-1, -3, -5, -7, -9])).toEqual(-1);
});

it("Should sum the numbers", () => {
  expect(sommeDesNombres([])).toEqual(0);
  expect(sommeDesNombres([1, 3, 5, 7, 9])).toEqual(25);
  expect(sommeDesNombres([-1, -3, -5, -7, -9])).toEqual(-25);
  expect(sommeDesNombres([-1, 0, -2, 5, 3, 6, 7, 8, -9, -10])).toEqual(7);
});
