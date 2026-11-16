import java.util.Scanner;

public class MaximoDivisorComum {

    public static int mdc(int a, int b) {

        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    public static void executar(Scanner sc) {
        System.out.print("Digite o primeiro inteiro (a): ");
        int a = sc.nextInt();
        System.out.print("Digite o segundo inteiro (b): ");
        int b = sc.nextInt();

        System.out.println("O MDC de " + a + " e " + b + " e: " + mdc(a, b));
    }
}
