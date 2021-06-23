import java.util.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int speed = in.nextInt();
        int lightCount = in.nextInt();
        ArrayList<Integer> tDistance = new ArrayList<>();
        ArrayList<Integer> tDuration = new ArrayList<>();
        for (int i = 0; i < lightCount; i++) {
            tDistance.add(in.nextInt());
            tDuration.add(in.nextInt());
        }
        int compteur = 0;
        int newSpeed = speed;
        while (lightCount != compteur) {
            compteur = 0;
            for (int k=0;k<tDuration.size();k++) {
                if (Math.floor(newSpeed*tDuration.get(k)/3.6) > tDistance.get(k) || 
                    Math.floor(newSpeed*tDuration.get(k)/3.6)%tDistance.get(k) == 0 || 
                    Math.floor(tDistance.get(k)/(newSpeed*tDuration.get(k)/3.6))%2 == 0 || 
                    Math.floor(newSpeed*tDuration.get(k)/3.6) == Math.floor(tDistance.get(k)%(newSpeed*tDuration.get(k)/3.6))) {
                    compteur++;
                }
                if (lightCount == compteur) {
                    System.out.println(newSpeed);
                }
            }
            newSpeed--;
        }
        in.close();
    }
}