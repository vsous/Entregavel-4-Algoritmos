# Entregável – Algoritmos Fundamentais com Testes Unitários

Seis algoritmos fundamentais em JavaScript (Node.js), com testes unitários escritos em [Jest](https://jestjs.io/docs/getting-started) e código revisado com práticas de programação defensiva e clean code.

| Algoritmo | Arquivo | Função |
|---|---|---|
| Número primo | `funcoes/numeroPrimo.js` | `ehPrimo(numero)` |
| Somatório | `funcoes/somatorio.js` | `calcularSomatorio(numeros)` |
| Fibonacci | `funcoes/fibonacci.js` | `gerarFibonacci(quantidadeTermos)` |
| MDC | `funcoes/mdc.js` | `calcularMdc(primeiroNumero, segundoNumero)` |
| Quicksort | `funcoes/quicksort.js` | `ordenarComQuicksort(numeros)` |
| Contagem | `funcoes/contagem.js` | `contarNoIntervalo(valores, limiteInferior, limiteSuperior)` |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (já vem com o npm)

Para conferir se está instalado:

```bash
node -v
npm -v
```

## Como executar os testes

Na pasta do projeto, rode:

```bash
npm install
npm test
```

O `npm install` baixa o Jest (listado em `devDependencies` no `package.json`). O `npm test` executa o script `"test": "jest --verbose"`, que roda todos os arquivos `*.test.js` da pasta `tests/` e mostra cada teste individualmente.

Resultado esperado:

```
PASS tests/fibonacci.test.js
  ✓ os 10 primeiros números da sequência de Fibonacci devem ser os corretos
  ✓ os 2 primeiros números de Fibonacci devem ser 0 e 1
  ✓ pedir 0 termos deve retornar uma lista vazia
  ✓ deve lançar erro para quantidade negativa, decimal ou grande demais
...

Test Suites: 6 passed, 6 total
Tests:       24 passed, 24 total
```

Para rodar os testes de um algoritmo só:

```bash
npx jest tests/fibonacci.test.js
```

## Como usar o menu interativo

```bash
npm start
```

Abre um menu no terminal para testar cada algoritmo digitando valores. Listas de números podem ser digitadas separadas por vírgula (ex.: `5, 4, 3, 1`).

## Estrutura do projeto

```
├── funcoes/            # algoritmos (um arquivo por algoritmo)
│   └── validacoes.js   # validações de entrada reutilizadas
├── tests/              # testes unitários Jest (um arquivo por algoritmo)
├── java/               # versão original em Java (atividade #1)
├── main.js             # menu interativo
└── package.json        # dependências e scripts (npm test / npm start)
```

## Programação defensiva e clean code

- **Nomes significativos:** funções e variáveis dizem o que fazem (`calcularMdc`, `limiteInferior`, `posicaoDoPivo`) em vez de nomes genéricos (`a`, `b`, `i`, `temp`).
- **Validação de entrada:** toda função confere os parâmetros antes de calcular (`funcoes/validacoes.js`). Texto, decimais onde se espera inteiro, `NaN` e listas com valores inválidos são rejeitados.
- **Tratamento de exceções:** entradas inválidas lançam `TypeError` (tipo errado) ou `RangeError` (valor fora do permitido) com mensagem clara. O menu captura esses erros com `try/catch` e mostra a mensagem sem encerrar o programa.
- **Sem efeitos colaterais:** o Quicksort devolve uma cópia ordenada e não altera a lista original.
- **Limites explícitos:** Fibonacci aceita até 78 termos, o máximo que o JavaScript representa sem perder precisão.
- **Uma responsabilidade por arquivo:** cada algoritmo fica no seu módulo e é testado isoladamente.

Cada algoritmo tem 4 testes: 2 de casos comuns, 1 de caso-limite e 1 de entrada inválida.
