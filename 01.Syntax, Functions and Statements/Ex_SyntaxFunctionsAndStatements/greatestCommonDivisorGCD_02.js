//In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.
function gcd(x, y) {
    
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    console.log(x);
  }
gcd(15, 5);
gcd(2154, 458);
