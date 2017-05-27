function LongestPalindrome(string) {

  var length = string.length;
  var res = "";

  var palindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      // increment at each direction
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length - 1; i++) {
    var oddPal = palindrome(i, i + 1);
    console.log("Test to see oddPal: ", oddPal);
    var evenPal = palindrome(i, i);
    console.log("Test to see evenPal: ", evenPal);

    if (oddPal.length > 1)
      console.log("oddPal: " + oddPal);
    if (evenPal.length > 1)
      console.log("evenPal: " + evenPal);

    if (oddPal.length > res.length)
      res = oddPal;
    if (evenPal.length > res.length)
      res = evenPal;
  }
  // console.log("The largest palindorme is: ", result);
  return "The largest palindrome is: " + res;
};

console.log(LongestPalindrome("I love evolution and racecars"));
