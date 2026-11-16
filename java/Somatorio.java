import java.util.Scanner;

public class Somatorio {

    public static long somar(int[] numeros) {
        long soma = 0;
        for (int valor : numeros) {
            soma += valor;
        }
        return soma;
    }

    public static void executar(Scanner sc) {
        System.out.print("Quantos numeros voce vai somar? ");
        int qtd = sc.nextInt();

        int[] numeros = new int[qtd];
        for (int i = 0; i < qtd; i++) {
            System.out.print("Digite o numero " + (i + 1) + ": ");
            numeros[i] = sc.nextInt();
        }

        System.out.println("O somatorio dos numeros e: " + somar(numeros));
    }
}
