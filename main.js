// Menu interativo no terminal (equivalente ao Main.java da atividade #1).
// Execute com: npm start
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const ehPrimo = require('./funcoes/numeroPrimo');
const calcularSomatorio = require('./funcoes/somatorio');
const gerarFibonacci = require('./funcoes/fibonacci');
const calcularMdc = require('./funcoes/mdc');
const ordenarComQuicksort = require('./funcoes/quicksort');
const contarNoIntervalo = require('./funcoes/contagem');

const terminal = readline.createInterface({ input, output });

// Converte o texto digitado em número; texto vazio ou inválido vira NaN,
// que as funções rejeitam com uma mensagem de erro clara.
function converterParaNumero(texto) {
  return texto.trim() === '' ? NaN : Number(texto);
}

async function lerNumero(pergunta) {
  return converterParaNumero(await terminal.question(pergunta));
}

async function lerListaDeNumeros(pergunta) {
  const texto = await terminal.question(pergunta);
  if (texto.trim() === '') return [];
  return texto.split(/[,\s]+/).filter(Boolean).map(converterParaNumero);
}

function exibirMenu() {
  console.log('\n========= MENU DE ALGORITMOS =========');
  console.log('1 - Número é primo?');
  console.log('2 - Somatório de um conjunto de números');
  console.log('3 - Fibonacci');
  console.log('4 - Máximo divisor comum (MDC)');
  console.log('5 - Ordenação (Quicksort)');
  console.log('6 - Contagem em um intervalo');
  console.log('0 - Sair do sistema');
  console.log('======================================');
}

const acoesDoMenu = {
  1: async () => {
    const numero = await lerNumero('Digite um número inteiro: ');
    console.log(ehPrimo(numero) ? `${numero} É PRIMO.` : `${numero} NÃO é primo.`);
  },
  2: async () => {
    const numeros = await lerListaDeNumeros('Digite os números separados por vírgula: ');
    console.log(`Somatório: ${calcularSomatorio(numeros)}`);
  },
  3: async () => {
    const quantidade = await lerNumero('Quantos termos de Fibonacci deseja gerar? ');
    console.log(`Sequência: ${gerarFibonacci(quantidade).join(', ')}`);
  },
  4: async () => {
    const primeiro = await lerNumero('Digite o primeiro inteiro: ');
    const segundo = await lerNumero('Digite o segundo inteiro: ');
    console.log(`MDC(${primeiro}, ${segundo}) = ${calcularMdc(primeiro, segundo)}`);
  },
  5: async () => {
    const numeros = await lerListaDeNumeros('Digite os números separados por vírgula: ');
    console.log(`Original: [${numeros.join(', ')}]`);
    console.log(`Ordenado: [${ordenarComQuicksort(numeros).join(', ')}]`);
  },
  6: async () => {
    const valores = await lerListaDeNumeros('Digite os valores separados por vírgula: ');
    const limiteInferior = await lerNumero('Limite inferior: ');
    const limiteSuperior = await lerNumero('Limite superior: ');
    const quantidade = contarNoIntervalo(valores, limiteInferior, limiteSuperior);
    console.log(`Valores dentro de [${limiteInferior}, ${limiteSuperior}]: ${quantidade}`);
  },
};

async function iniciar() {
  let opcao;
  do {
    exibirMenu();
    opcao = (await terminal.question('Escolha uma opção: ')).trim();

    if (opcao === '0') {
      console.log('Encerrando o programa. Até mais!');
    } else if (acoesDoMenu[opcao]) {
      try {
        await acoesDoMenu[opcao]();
      } catch (erro) {
        // Tratamento de exceções: o programa não quebra com entrada inválida.
        console.log(`Entrada inválida: ${erro.message}`);
      }
    } else {
      console.log('Opção inexistente. Tente novamente.');
    }
  } while (opcao !== '0');

  terminal.close();
}

iniciar();
