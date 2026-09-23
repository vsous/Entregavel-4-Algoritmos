import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao = -1;

        do {
            exibirMenu();
            System.out.print("Escolha uma opcao: ");

            if (sc.hasNextInt()) {
                opcao = sc.nextInt();
            } else {
                System.out.println("Entrada invalida! Digite um numero.\n");
                sc.next();
                continue;
            }

            System.out.println();

            switch (opcao) {
                case 1 -> NumeroPrimo.executar(sc);
                case 2 -> Somatorio.executar(sc);
                case 3 -> Fibonacci.executar(sc);
                case 4 -> MaximoDivisorComum.executar(sc);
                case 5 -> Ordenacao.executar(sc);
                case 6 -> Contagem.executar(sc);
                case 0 -> System.out.println("Encerrando o programa. Ate mais!");
                default -> System.out.println("Opcao inexistente. Tente novamente.");
            }

            System.out.println();
        } while (opcao != 0);

        sc.close();
    }

    private static void exibirMenu() {
        System.out.println("========= MENU DE ALGORITMOS =========");
        System.out.println("1 - Numero e primo?");
        System.out.println("2 - Somatorio de um conjunto de numeros");
        System.out.println("3 - Fibonacci");
        System.out.println("4 - Maximo divisor comum (MDC)");
        System.out.println("5 - Ordenacao (Quicksort)");
        System.out.println("6 - Contagem");
        System.out.println("0 - Sair do Sistema");
        System.out.println("======================================");
    }
}
