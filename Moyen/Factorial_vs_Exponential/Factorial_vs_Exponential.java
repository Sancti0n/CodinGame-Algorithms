import java.util.*;
import java.io.*;
import java.math.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int K = in.nextInt();
        List<Float> tabNumber = new ArrayList<Float>();
        String stringN = "";
        for (int i=0;i<K;i++) {
            tabNumber.add(in.nextFloat());
        }
        System.err.println("Debug messages..."+ tabNumber);
        for (int a=0;a<tabNumber.size();a++) {
            double sum = 0;
            double n = 0;
            double sumN = 0;
            while (Math.log(tabNumber.get(a)) > sumN) {
                sum += Math.log(n+1);
                sumN = sum/(n+1);
                n++;
            }
            if (a+1 == tabNumber.size()) {
                stringN += (int) n;
            }
            else {
                stringN += (int) n + " ";
            }
        }
        System.out.println(stringN);
    }
}