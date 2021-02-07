
// Check if number is a triangle number
public class TriangleNumbers {
  
  public static Boolean isTriangleNumber(long number) {
    int i = 1;
    int triangle = 0;
    while(triangle < number) {
          triangle = (i*(i+1))/2;
          if(triangle > number)  return false;
          i++;
    }
    return true;
  }
}