import java.util.*;

class Solution {
    static int riverSum(int n) {
        //int value = n;
        String temp = Integer.toString(n);
        for (int i=0;i<temp.length();i++) {
            n += Integer.parseInt(String.valueOf(temp.charAt(i)));
        }
        return n;
    }

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int r1 = in.nextInt();
        int r2 = in.nextInt();

        while (true) {
            if (r1<r2) {
                r1 = riverSum(r1);
            }
            else {
                if (r1==r2) {
                    break;
                }
                r2 = riverSum(r2);
            }
        }
        System.out.println(r1);
        in.close();
    }
}