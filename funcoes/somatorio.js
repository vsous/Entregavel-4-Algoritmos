const { validarListaDeNumeros } = require('./validacoes');

/**
 * Soma todos os números de uma lista.
 * @param {number[]} numeros - lista de números
 * @returns {number} soma dos valores (0 para lista vazia)
 */
function calcularSomatorio(numeros) {
  validarListaDeNumeros(numeros, 'numeros');

  let soma = 0;
  for (const valor of numeros) {
    soma += valor;
  }
  return soma;
}

module.exports = calcularSomatorio;
