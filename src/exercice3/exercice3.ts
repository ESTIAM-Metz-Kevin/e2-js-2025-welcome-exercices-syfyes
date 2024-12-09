/**
 * Exercices sur les fonctions
 */

console.log("EXERCICE 3");
console.log("----------------------------------");

/**
 * Créer une fonction qui retourne une closure (fonction de fermeture, ou fonction interne) qui incrémente le compteur & renvoie la valeur du compteur à chaque appel
 * @example createCounter() => () => 0 => () => 1 => () => 2
 */
export function faireUnCompteur() {
  throw new Error("Not implemented");
}

const compteur = faireUnCompteur();
console.log(compteur());
console.log(compteur());
console.log(compteur());
console.log("----------------------------------");

/**
 * Créer une fonction qui fait un appel x fois du callback (fonction de rappel)
 */
export function perroquet(text: string, number_of_call: number, callback: Function) {
  throw new Error("Not implemented");
}

perroquet("perroquet", 3, console.log);
console.log("----------------------------------");
