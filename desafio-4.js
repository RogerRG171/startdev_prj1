//challenge 4

/* Está função recebe um número e retorna um array com
 * os números de n até 1
 * ... spread operator
 * Array object
 * (numero + 1) para incluir o própio número no array
 * .slice(1) para excluir o zero | 0
 * .reverse() para inverter o array
 */

function contador(numero) {
  return [...Array(numero + 1).keys()].slice(1).reverse();
}

const lst = contador(10);

console.log(lst);
