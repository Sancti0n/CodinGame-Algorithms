import java.util.*;

class Solution {
    static int riverSum(int n) {
        String temp = Integer.toString(n);
        for (int i=0;i<temp.length();i++) {
            n += Integer.parseInt(String.valueOf(temp.charAt(i)));
        }
        return n;
    }

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int r1 = in.nextInt();
        int r2;
        String value = "NO";

        for (int i=r1-1;i>1;i--) {
            r2 = riverSum(i);
            if (r2==r1) {
                value = "YES";
                break;
            }
        }
        System.out.println(value);
        in.close();
    }
}