import { it, expect } from "vitest";
import { faireUnCompteur, perroquet } from "./exercice3";

it("Should create a counter closure", () => {
  const counter = faireUnCompteur();
  expect(counter()).toEqual(0);
  expect(counter()).toEqual(1);
  expect(counter()).toEqual(2);

  const counter2 = faireUnCompteur();
  expect(counter2()).toEqual(0);
});

it("Should call the callback x times", () => {
  let functionCalledCount = 0;
  let textParameter;
  const spyFunction = (text: string) => {
    functionCalledCount++;
    textParameter = text;
  };

  perroquet("hello", 3, spyFunction);

  expect(textParameter).toEqual("hello");
  expect(functionCalledCount).toEqual(3);
});
