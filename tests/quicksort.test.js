const ordenarComQuicksort = require('../funcoes/quicksort');

test('[5, 4, 3, 1] ordenado deve ser [1, 3, 4, 5]', () => {
  expect(ordenarComQuicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('deve lançar erro se a entrada não for uma lista de números', () => {
  expect(() => ordenarComQuicksort(null)).toThrow(TypeError);
  expect(() => ordenarComQuicksort([2, 'a', 1])).toThrow(TypeError);
});
