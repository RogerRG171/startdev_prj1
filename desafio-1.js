//challenge 1

const clientes = [
  { nome: "Rafael", email: "rafael@gmail.com", status: true },

  { nome: "Fernanda", email: "fernanda@gmail.com", status: true },

  { nome: "João", email: "joao@gmail.com", status: false },

  { nome: "Maria", email: "maria@gmail.com", status: false },

  { nome: "Ana", email: "ana@gmail.com", status: true },
];

console.log(clientes);

const clientes2 = clientes.filter((c) => c.status == true);

console.log(clientes2);
