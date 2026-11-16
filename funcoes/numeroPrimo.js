const { validarInteiro } = require('./validacoes');

/**
 * Verifica se um número inteiro é primo.
 * @param {number} numero - inteiro a ser verificado
 * @returns {boolean} true se for primo, false caso contrário
 */
function ehPrimo(numero) {
  validarInteiro(numero, 'numero');

  if (numero < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}

module.exports = ehPrimo;
