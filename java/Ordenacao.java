import java.util.Arrays;
import java.util.Scanner;

public class Ordenacao {

    public static void quicksort(int[] vetor) {
        quicksort(vetor, 0, vetor.length - 1);
    }

    private static void quicksort(int[] vetor, int inicio, int fim) {
        if (inicio < fim) {
            int posicaoPivo = particionar(vetor, inicio, fim);
            quicksort(vetor, inicio, posicaoPivo - 1);
            quicksort(vetor, posicaoPivo + 1, fim);
        }
    }

    private static int particionar(int[] vetor, int inicio, int fim) {
        int pivo = vetor[fim];
        int i = inicio - 1;
        for (int j = inicio; j < fim; j++) {
            if (vetor[j] <= pivo) {
                i++;
                trocar(vetor, i, j);
            }
        }

        trocar(vetor, i + 1, fim);
        return i + 1;
    }

    private static void trocar(int[] vetor, int a, int b) {
        int temp = vetor[a];
        vetor[a] = vetor[b];
        vetor[b] = temp;
    }

    public static void executar(Scanner sc) {
        System.out.print("Quantos numeros voce vai ordenar? ");
        int qtd = sc.nextInt();

        int[] vetor = new int[qtd];
        for (int i = 0; i < qtd; i++) {
            System.out.print("Digite o numero " + (i + 1) + ": ");
            vetor[i] = sc.nextInt();
        }

        System.out.println("Vetor original:  " + Arrays.toString(vetor));
        quicksort(vetor);
        System.out.println("Vetor ordenado:  " + Arrays.toString(vetor));
    }
}
