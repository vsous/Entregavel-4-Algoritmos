import java.util.Scanner;

public class Fibonacci {

    public static long[] gerar(int quantidade) {
        long[] termos = new long[quantidade];

        for (int i = 0; i < quantidade; i++) {
            if (i == 0) {
                termos[i] = 0;
            } else if (i == 1) {
                termos[i] = 1;
            } else {

                termos[i] = termos[i - 1] + termos[i - 2];
            }
        }
        return termos;
    }

    public static void executar(Scanner sc) {
        System.out.print("Quantos termos de Fibonacci deseja gerar? ");
        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println("Informe um valor maior que zero.");
            return;
        }

        long[] termos = gerar(n);

        System.out.print("Sequencia de Fibonacci: ");
        for (int i = 0; i < termos.length; i++) {
            System.out.print(termos[i]);
            if (i < termos.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}
