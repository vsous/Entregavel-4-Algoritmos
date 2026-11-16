const gerarFibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números da sequência de Fibonacci devem ser os corretos', () => {
  expect(gerarFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('os 2 primeiros números de Fibonacci devem ser 0 e 1', () => {
  expect(gerarFibonacci(2)).toEqual([0, 1]);
});

test('pedir 0 termos deve retornar uma lista vazia', () => {
  expect(gerarFibonacci(0)).toEqual([]);
});

test('deve lançar erro para quantidade negativa, decimal ou grande demais', () => {
  expect(() => gerarFibonacci(-1)).toThrow(RangeError);
  expect(() => gerarFibonacci(3.5)).toThrow(TypeError);
  expect(() => gerarFibonacci(100)).toThrow(RangeError);
});
