// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas). Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0],
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
];

//Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
for (usuario of usuarios) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas);
  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`);
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`);
  }
}

function calculaSaldo(receitas, despesas) {
  somaReceitas = somaNumeros(receitas);
  somaDespesas = somaNumeros(despesas);

  return somaReceitas - somaDespesas;
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  // começo com uma variável vazia que vai implementando a cada iteração no for
  let soma = 0;
  // percorro um array de números
  for (numero of numeros) {
    // faço a soma dos números
    soma = soma + numero;
  }
  return soma;
}
