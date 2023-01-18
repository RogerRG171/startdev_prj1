//challenge 2

const vendas = [
  { cliente: "Rafael", valor: 50 },

  { cliente: "Maria", valor: 150 },

  { cliente: "Joao", valor: 559.9 },

  { cliente: "Jessica", valor: -50 },

  { cliente: "Roberto", valor: -59.9 },
];

const soma = vendas.map((v) => v.valor).reduce((a, b) => a + b);

console.log(soma);
