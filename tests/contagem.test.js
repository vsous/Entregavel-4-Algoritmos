const contarNoIntervalo = require('../funcoes/contagem');

test('deve contar 3 valores de [1, 5, 10, 15] dentro do intervalo [1, 10]', () => {
  expect(contarNoIntervalo([1, 5, 10, 15], 1, 10)).toBe(3);
});

test('deve lançar erro se os valores ou limites não forem números', () => {
  expect(() => contarNoIntervalo('1,2,3', 1, 10)).toThrow(TypeError);
  expect(() => contarNoIntervalo([1, 2, 3], 'um', 10)).toThrow(TypeError);
});
