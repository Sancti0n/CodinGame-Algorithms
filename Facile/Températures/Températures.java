import java.util.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // the number of temperatures to analyse
        ArrayList<Integer> t = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            t.add(in.nextInt()); // a temperature expressed as an integer ranging from -273 to 5526
        }
        int a = 0;
        if (t.isEmpty()) {
            System.out.println(0);
        }
        else {
            while (!(t.contains(a) || t.contains(-a))) {
                a += 1;
            }
            if (t.contains(a)) {
                System.out.println(a);
            }
            else if (t.contains(-a) && !(t.contains(a))) {
                System.out.println(-a);
            }
        }
    }
}