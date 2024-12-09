/**
 * Manipulation de tableaux
 */

console.log("EXERCICE 2");
console.log("----------------------------------");

/**
 * Filtrer un tableau pour garder uniquement les nombres pairs
 * @example seulementLesNombresPairs([1, 3, 5, 7, 9]) => []
 * @example seulementLesNombresPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]
 */
export function seulementLesNombresPairs(numbers: number[]): number[] {
  throw new Error("Not implemented");
}

console.log(seulementLesNombresPairs([1, 3, 5, 7, 9]));
console.log(seulementLesNombresPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("----------------------------------");

/**
 * Trouver le maximum dans un tableau de nombres
 * @example trouverLeNombreMaximum([1, 3, 5, 7, 9]) => 9
 * @example trouverLeNombreMaximum([-1, -3, -5, -7, -9]) => -1
 */
export function trouverLeNombreMaximum(numbers: number[]): number {
  throw new Error("Not implemented");
}

console.log(trouverLeNombreMaximum([1, 3, 5, 7, 9]));
console.log(trouverLeNombreMaximum([-1, -3, -5, -7, -9]));
console.log("----------------------------------");

/**
 * Implémentez une fonction qui prend en paramètre un tableau de nombres et qui retourne la somme de tous ces nombres, sans utiliser de boucle for
 * @example sommeDesNombres([]) => 0
 * @example sommeDesNombres([1, 3, 5, 7, 9]) => 25
 * @example sommeDesNombres([-1, -3, -5, -7, -9]) => -25
 * @exemple sommeDesNombres([-1, 0, -2, 5, 3, 6, 7, 8, -9, -10]) => 7
 */
export function sommeDesNombres(numbers: number[]): number {
  throw new Error("Not implemented");
}

console.log(sommeDesNombres([]));
console.log(sommeDesNombres([1, 3, 5, 7, 9]));
console.log(sommeDesNombres([-1, -3, -5, -7, -9]));
console.log(sommeDesNombres([-1, 0, -2, 5, 3, 6, 7, 8, -9, -10]));
console.log("----------------------------------");
