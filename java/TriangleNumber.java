
// Check if number is a triangle number
class TriangleNumber {
  public Boolean isTriangleNumber(long number) {
    int i = 1;
    int triangle = 0;
    while (triangle < number) {
      triangle = (i * (i + 1)) / 2;
      if (triangle > number)
        return false;
      i++;
    }
    return true;
  }

  public static void main(String[] args) {
    TriangleNumber triangleNumber = new TriangleNumber();
    System.out.println(triangleNumber.isTriangleNumber(10));
  }
}