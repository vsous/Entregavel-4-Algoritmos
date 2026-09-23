import java.util.Scanner;

public class Contagem {

    public static int contarNoIntervalo(int[] valores, int limInf, int limSup) {
        int contador = 0;
        for (int valor : valores) {
            if (valor >= limInf && valor <= limSup) {
                contador++;
            }
        }
        return contador;
    }

    public static void executar(Scanner sc) {
        System.out.print("Quantos numeros (N) voce vai informar? ");
        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println("Informe um valor maior que zero.");
            return;
        }

        int[] valores = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Digite o numero " + (i + 1) + ": ");
            valores[i] = sc.nextInt();
        }

        int primeiro = valores[0];

        int limiteInferior = Math.min(primeiro, n);
        int limiteSuperior = Math.max(primeiro, n);

        int quantidade = contarNoIntervalo(valores, limiteInferior, limiteSuperior);

        System.out.println("Intervalo considerado: [" + limiteInferior
                + " ate " + limiteSuperior + "]");
        System.out.println("Quantidade de valores dentro do intervalo: " + quantidade);
    }
}
