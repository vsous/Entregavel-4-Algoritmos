const ehPrimo = require('../funcoes/numeroPrimo');

test('7 deve ser primo', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('10 não deve ser primo', () => {
  expect(ehPrimo(10)).toBe(false);
});

test('0, 1 e números negativos não são primos', () => {
  expect(ehPrimo(0)).toBe(false);
  expect(ehPrimo(1)).toBe(false);
  expect(ehPrimo(-7)).toBe(false);
});

test('deve lançar erro se a entrada não for um número inteiro', () => {
  expect(() => ehPrimo('7')).toThrow(TypeError);
  expect(() => ehPrimo(2.5)).toThrow(TypeError);
});
