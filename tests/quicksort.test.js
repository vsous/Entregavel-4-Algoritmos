const ordenarComQuicksort = require('../funcoes/quicksort');

test('[5, 4, 3, 1] ordenado deve ser [1, 3, 4, 5]', () => {
  expect(ordenarComQuicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('[100, 4, 3, 150] ordenado deve ser [3, 4, 100, 150]', () => {
  expect(ordenarComQuicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});

test('deve ordenar números negativos e repetidos sem alterar a lista original', () => {
  const listaOriginal = [3, -1, 3, 0];
  expect(ordenarComQuicksort(listaOriginal)).toEqual([-1, 0, 3, 3]);
  expect(listaOriginal).toEqual([3, -1, 3, 0]);
});

test('deve lançar erro se a entrada não for uma lista de números', () => {
  expect(() => ordenarComQuicksort(null)).toThrow(TypeError);
  expect(() => ordenarComQuicksort([2, 'a', 1])).toThrow(TypeError);
});
