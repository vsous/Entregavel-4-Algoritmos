const calcularSomatorio = require('../funcoes/somatorio');

test('a soma de [10, 20] deve ser 30', () => {
  expect(calcularSomatorio([10, 20])).toBe(30);
});

test('a soma de [-10, 20, 5] deve ser 15', () => {
  expect(calcularSomatorio([-10, 20, 5])).toBe(15);
});

test('a soma de uma lista vazia deve ser 0', () => {
  expect(calcularSomatorio([])).toBe(0);
});

test('deve lançar erro se a lista tiver valores que não são números', () => {
  expect(() => calcularSomatorio([1, 'dois', 3])).toThrow(TypeError);
  expect(() => calcularSomatorio('1,2,3')).toThrow(TypeError);
});
