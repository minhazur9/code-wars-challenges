// Check if number is prime
class PrimeNumber {
  public boolean isPrime(int num) {
    if (num <= 1)
      return false;
    for (int i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  public static void main(String[] args) {
    PrimeNumber primeNumber = new PrimeNumber();
    System.out.println(primeNumber.isPrime(1434356));
  }
}