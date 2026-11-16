/**
 * Funções de validação reutilizadas pelos algoritmos (programação defensiva).
 * Cada uma lança um erro com mensagem clara quando a entrada é inválida,
 * em vez de deixar o algoritmo seguir com dados errados.
 */

function validarInteiro(valor, nomeParametro) {
  if (typeof valor !== 'number' || !Number.isInteger(valor)) {
    throw new TypeError(`${nomeParametro} deve ser um número inteiro.`);
  }
}

function validarNumeroFinito(valor, nomeParametro) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new TypeError(`${nomeParametro} deve ser um número válido.`);
  }
}

function validarListaDeNumeros(lista, nomeParametro) {
  if (!Array.isArray(lista)) {
    throw new TypeError(`${nomeParametro} deve ser uma lista (array) de números.`);
  }
  lista.forEach((item, posicao) => {
    validarNumeroFinito(item, `${nomeParametro}[${posicao}]`);
  });
}

module.exports = { validarInteiro, validarNumeroFinito, validarListaDeNumeros };
