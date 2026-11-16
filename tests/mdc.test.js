const calcularMdc = require('../funcoes/mdc');

test('o MDC de 5 e 10 deve ser 5', () => {
  expect(calcularMdc(5, 10)).toBe(5);
});

test('o MDC de 48 e 18 deve ser 6', () => {
  expect(calcularMdc(48, 18)).toBe(6);
});

test('o MDC deve ser positivo mesmo com números negativos', () => {
  expect(calcularMdc(-12, 8)).toBe(4);
});

test('deve lançar erro se algum valor não for inteiro', () => {
  expect(() => calcularMdc(4.2, 2)).toThrow(TypeError);
  expect(() => calcularMdc(4, '2')).toThrow(TypeError);
});
