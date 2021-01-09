import java.lang.Math;
class BouncingBall {
  public static int bouncingBall(double h, double bounce, double window) {
      if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
      if (h * bounce <= window) return 1;
      double log1 = Math.log(h) / Math.log(bounce);
      double log2 = Math.log(window) / Math.log(bounce);
      int passes = Math.abs((int)Math.ceil(log1 - log2))*2+1;
      return passes;
  }
}