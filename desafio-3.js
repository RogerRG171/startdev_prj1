//challenge 3

function verificaString(array) {
  const wordLength = array
    .map((w) => w)
    .reduce((a, b) => {
      return a.length > b.length ? a : b;
    });

  return wordLength;
}

const result = verificaString([
  "Joao",
  "Cachorro",
  "Calopsita",
  "Ana",
  "Ronaldo",
]);

console.log(result);
