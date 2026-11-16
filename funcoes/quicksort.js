const { validarListaDeNumeros } = require('./validacoes');

/**
 * Ordena uma lista de números em ordem crescente usando Quicksort.
 * Não altera a lista original: devolve uma cópia ordenada.
 * @param {number[]} numeros
 * @returns {number[]} nova lista ordenada
 */
function ordenarComQuicksort(numeros) {
  validarListaDeNumeros(numeros, 'numeros');

  const copia = [...numeros];
  quicksortRecursivo(copia, 0, copia.length - 1);
  return copia;
}

function quicksortRecursivo(lista, inicio, fim) {
  if (inicio < fim) {
    const posicaoDoPivo = particionar(lista, inicio, fim);
    quicksortRecursivo(lista, inicio, posicaoDoPivo - 1);
    quicksortRecursivo(lista, posicaoDoPivo + 1, fim);
  }
}

function particionar(lista, inicio, fim) {
  const pivo = lista[fim];
  let ultimoMenorOuIgual = inicio - 1;

  for (let atual = inicio; atual < fim; atual++) {
    if (lista[atual] <= pivo) {
      ultimoMenorOuIgual++;
      trocarPosicoes(lista, ultimoMenorOuIgual, atual);
    }
  }

  trocarPosicoes(lista, ultimoMenorOuIgual + 1, fim);
  return ultimoMenorOuIgual + 1;
}

function trocarPosicoes(lista, posicaoA, posicaoB) {
  const temporario = lista[posicaoA];
  lista[posicaoA] = lista[posicaoB];
  lista[posicaoB] = temporario;
}

module.exports = ordenarComQuicksort;
