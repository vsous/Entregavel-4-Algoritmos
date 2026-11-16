const { validarListaDeNumeros, validarNumeroFinito } = require('./validacoes');

/**
 * Conta quantos valores da lista estão dentro do intervalo
 * [limiteInferior, limiteSuperior] (limites incluídos).
 * @param {number[]} valores
 * @param {number} limiteInferior
 * @param {number} limiteSuperior
 * @returns {number} quantidade de valores dentro do intervalo
 */
function contarNoIntervalo(valores, limiteInferior, limiteSuperior) {
  validarListaDeNumeros(valores, 'valores');
  validarNumeroFinito(limiteInferior, 'limiteInferior');
  validarNumeroFinito(limiteSuperior, 'limiteSuperior');

  if (limiteInferior > limiteSuperior) {
    throw new RangeError('limiteInferior não pode ser maior que limiteSuperior.');
  }

  let quantidade = 0;
  for (const valor of valores) {
    if (valor >= limiteInferior && valor <= limiteSuperior) {
      quantidade++;
    }
  }
  return quantidade;
}

module.exports = contarNoIntervalo;
