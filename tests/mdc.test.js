const calcularMdc = require('../funcoes/mdc');

test('o MDC de 5 e 10 deve ser 5', () => {
  expect(calcularMdc(5, 10)).toBe(5);
});

test('deve lançar erro se algum valor não for inteiro', () => {
  expect(() => calcularMdc(4.2, 2)).toThrow(TypeError);
  expect(() => calcularMdc(4, '2')).toThrow(TypeError);
});
