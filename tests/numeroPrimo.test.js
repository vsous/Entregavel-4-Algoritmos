const ehPrimo = require('../funcoes/numeroPrimo');

test('7 deve ser primo', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('deve lançar erro se a entrada não for um número inteiro', () => {
  expect(() => ehPrimo('7')).toThrow(TypeError);
  expect(() => ehPrimo(2.5)).toThrow(TypeError);
});
