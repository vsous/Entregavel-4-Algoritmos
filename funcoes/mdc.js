const { validarInteiro } = require('./validacoes');

/**
 * Calcula o Máximo Divisor Comum de dois inteiros (algoritmo de Euclides).
 * @param {number} primeiroNumero
 * @param {number} segundoNumero
 * @returns {number} MDC (sempre positivo; mdc(0, 0) = 0)
 */
function calcularMdc(primeiroNumero, segundoNumero) {
  validarInteiro(primeiroNumero, 'primeiroNumero');
  validarInteiro(segundoNumero, 'segundoNumero');

  let dividendo = Math.abs(primeiroNumero);
  let divisor = Math.abs(segundoNumero);

  while (divisor !== 0) {
    const resto = dividendo % divisor;
    dividendo = divisor;
    divisor = resto;
  }
  return dividendo;
}

module.exports = calcularMdc;
