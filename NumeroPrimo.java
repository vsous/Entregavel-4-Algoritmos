import java.util.Scanner;

public class NumeroPrimo {

    public static boolean ehPrimo(int n) {

        if (n < 2) {
            return false;
        }
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    public static void executar(Scanner sc) {
        System.out.print("Digite um numero inteiro positivo: ");
        int n = sc.nextInt();

        if (ehPrimo(n)) {
            System.out.println("O numero " + n + " E PRIMO.");
        } else {
            System.out.println("O numero " + n + " NAO e primo.");
        }
    }
}
