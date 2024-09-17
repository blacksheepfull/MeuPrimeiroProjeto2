// Função que soma dois números
function somar(a, b) {
  return a + b;
}

// Função que subtrai dois números
function subtrair(a, b) {
  return a - b;
}

// Função que multiplica dois números
function multiplicar(a, b) {
  return a * b;
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return a / b;
}

// Função que verifica se um número é par
function ehPar(numero) {
  return numero % 2 === 0;
}

// Função que encontra o maior número em um array
function encontrarMaior(arr) {
  if (arr.length === 0) {
    throw new Error("Array está vazio");
  }
  return Math.max(...arr);
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  encontrarMaior,
};