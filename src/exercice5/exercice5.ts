/**
 * Exercices sur les algos
 */

console.log("EXERCICE 5");
console.log("----------------------------------");

/**
 * FizzBuzz, écrire une fonction qui prend en paramètre un nombre et retourne une chaîne de caractères
 * retourne Fizz si le nombre est un multiple de 3
 * retourne Buzz si le nombre est un multiple de 5
 * retourne FizzBuzz si le nombre est un multiple de 3 et 5
 * sinon retourne le nombre
 */
export function fizzBuzz(number: number): string | number {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

console.log(fizzBuzz(7));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log("----------------------------------");
