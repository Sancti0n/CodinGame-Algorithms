import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        while (true) {
            int max = 0;
            int rang = 0;
            for (int i = 0; i < 8; i++) {
                int mountainH = in.nextInt();
                if (max < mountainH) {
                    max = mountainH;
                    rang = i;
                }
            }
            System.out.println(rang);
        }
    }
}