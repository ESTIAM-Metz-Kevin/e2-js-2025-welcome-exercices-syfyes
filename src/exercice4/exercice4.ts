/**
 * Exercices sur les objets
 */

console.log("EXERCICE 4");
console.log("----------------------------------");

/**
 * Ecrire une fonction qui permet de construire un OBJET vehicule avec les propriétés suivantes:
 * - marque
 * - modele
 * - annee_de_construction
 * - nombre_de_roues
 */
export function construitUnVehicule(marque: string, modele: string, annee_de_construction: number, nombre_de_roues: number, nombre_de_portes: number): { [key: string]: any } {
  return {
    marque,
    modele,
    annee_de_construction,
    nombre_de_roues,
    nombre_de_portes,
  };
}

const voiture = construitUnVehicule("Toyota", "Corolla", 2020, 4, 4);
const moto = construitUnVehicule("Kawasaki", "Ninja", 2021, 2, 0);
console.log(voiture);
console.log(moto);
console.log("----------------------------------");

/**
 * Ecrire une fonction qui permet de récupérer le nombre de roues d'un vehicule
 * @param vehicule
 */
export function combienCeVehiculeADeRoues(vehicule: { [key: string]: any }) {
  return vehicule.nombre_de_roues;
}

console.log(combienCeVehiculeADeRoues(voiture));
console.log(combienCeVehiculeADeRoues(moto));
console.log("----------------------------------");

/**
 * Ecrire une fonction qui construit un nouveau véhicule de 2024 à partir des informations d'un autre véhicule
 * ⚠️ Attention à la mutation d'objets !
 * @see https://www.sitepoint.com/variable-assignment-mutation-javascript/
 * @param vehicule
 */
export function construitUnVehiculeNeuf(vehicule: { [key: string]: any }): { [key: string]: any } {
  return {
    ...vehicule,
    annee_de_construction: 2024,
  };
}

console.log(construitUnVehiculeNeuf(voiture));
console.log(voiture); // Vous ne devez pas avoir le contenu de voiture qui a mutée!
console.log("----------------------------------");

/**
 * Ecrire une fonction qui met à jour la valeur d'une propriété d'un objet
 * @example editerLaProprieteObjet({name: 'John'}, 'name', 'Doe') => {name: 'Doe'}
 * @example editerLaProprieteObjet({name: 'John'}, 'age', 30) => {name: 'John', age: 30}
 */
export function editerLaProprieteObjet(object: { [key: string]: any }, property: string, value: any): { [key: string]: any } {
  return { ...object, [property]: value };
}

console.log(editerLaProprieteObjet({ name: "John" }, "name", "Doe"));
console.log(editerLaProprieteObjet({ name: "John" }, "age", 30));
console.log("----------------------------------");

/**
 * Ecrire une fonction qui fusionne deux objets et retourne un nouvel objet qui est la fusion des deux. Si les deux objets ont les mêmes propriétés,
 * les valeurs de la deuxième instance doivent prévaloir
 * @example dragonBallFusion({name: 'John'}, {name: 'Doe'}) => {name: 'Doe'}
 * @example dragonBallFusion({name: 'John'}, {age: 30}) => {name: 'John', age: 30}
 * @example dragonBallFusion({name: 'John'}, {name: 'Doe', age: 30}) => {name: 'Doe', age: 30}
 */
export function dragonBallFusion(object1: { [key: string]: any }, object2: { [key: string]: any }): { [key: string]: any } {
  return { ...object1, ...object2 };
}

console.log(dragonBallFusion({ name: "John" }, { name: "Doe" }));
console.log(dragonBallFusion({ name: "John" }, { age: 30 }));
console.log(dragonBallFusion({ name: "John" }, { name: "Doe", age: 30 }));
console.log("----------------------------------");
