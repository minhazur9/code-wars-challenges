
// Displays text of who liked your post and how many have also liked it
class Solution {
    public static String whoLikesIt(String... names) {
        if(names.length == 0) {
            return "no one likes this";
        }
      
        else if(names.length == 1) {
            return names[0] + " likes this";
        }
      
        else if(names.length == 2) {
            return names[0] + " and " + names[1] + " like this";
        }
      
        else if(names.length == 3) {
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        }
        else {
            int remainder = names.length - 2;
            return names[0] + ", " + names[1] + " and " + remainder + " others like this";
        }
    }
}