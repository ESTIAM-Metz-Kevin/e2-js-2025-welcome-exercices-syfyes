import { it, expect } from "vitest";
import { combienCeVehiculeADeRoues, construitUnVehicule, construitUnVehiculeNeuf, dragonBallFusion, editerLaProprieteObjet } from "./exercice4";

it("Should build a vehicle object", () => {
  const toyota = construitUnVehicule("Toyota", "Corolla", 2020, 4, 4);
  const audi = construitUnVehicule("Audi", "Q7", 2021, 4, 4);

  expect(toyota).toEqual({
    marque: "Toyota",
    modele: "Corolla",
    annee_de_construction: 2020,
    nombre_de_roues: 4,
    nombre_de_portes: 4,
  });

  expect(audi).toEqual({
    marque: "Audi",
    modele: "Q7",
    annee_de_construction: 2021,
    nombre_de_roues: 4,
    nombre_de_portes: 4,
  });
});

it("Should display number of wheels", () => {
  const toyota = construitUnVehicule("Toyota", "Corolla", 2020, 4, 4);
  expect(combienCeVehiculeADeRoues(toyota)).toBe(4);
});

it("Should build a new vehicle object", () => {
  const toyota = construitUnVehicule("Toyota", "Corolla", 2020, 4, 4);
  const freshNewToyota = construitUnVehiculeNeuf(toyota);

  expect(freshNewToyota).not.equal(toyota);
  expect(freshNewToyota).toEqual({
    marque: "Toyota",
    modele: "Corolla",
    annee_de_construction: 2024,
    nombre_de_roues: 4,
    nombre_de_portes: 4,
  });
});

it("Should update object property", () => {
  expect(editerLaProprieteObjet({ name: "John" }, "name", "Doe")).toEqual({ name: "Doe" });
  expect(editerLaProprieteObjet({ name: "John" }, "age", 30)).toEqual({ name: "John", age: 30 });
});

it("Should merge two objects", () => {
  expect(dragonBallFusion({ name: "John" }, { name: "Doe" })).toEqual({ name: "Doe" });
  expect(dragonBallFusion({ name: "John" }, { age: 30 })).toEqual({ name: "John", age: 30 });
  expect(dragonBallFusion({ name: "John" }, { name: "Doe", age: 30 })).toEqual({ name: "Doe", age: 30 });
});
