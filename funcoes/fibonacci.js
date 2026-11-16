const { validarInteiro } = require('./validacoes');

// A partir do 79º termo os valores passam de Number.MAX_SAFE_INTEGER
// e o JavaScript começa a perder precisão.
const QUANTIDADE_MAXIMA_DE_TERMOS = 78;

/**
 * Gera os primeiros termos da sequência de Fibonacci.
 * @param {number} quantidadeTermos - quantos termos gerar (0 a 78)
 * @returns {number[]} lista com os termos, começando em 0
 */
function gerarFibonacci(quantidadeTermos) {
  validarInteiro(quantidadeTermos, 'quantidadeTermos');

  if (quantidadeTermos < 0) {
    throw new RangeError('quantidadeTermos não pode ser negativa.');
  }
  if (quantidadeTermos > QUANTIDADE_MAXIMA_DE_TERMOS) {
    throw new RangeError(
      `quantidadeTermos deve ser no máximo ${QUANTIDADE_MAXIMA_DE_TERMOS}.`
    );
  }

  const termos = [];
  for (let posicao = 0; posicao < quantidadeTermos; posicao++) {
    if (posicao === 0) {
      termos.push(0);
    } else if (posicao === 1) {
      termos.push(1);
    } else {
      termos.push(termos[posicao - 1] + termos[posicao - 2]);
    }
  }
  return termos;
}

module.exports = gerarFibonacci;
