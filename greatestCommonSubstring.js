function GreatestCommonSubstring (str1, str2){
  var res = "";
  var temp = "";
  if (str1.length < 0 || str2.length < 0){
    return res;
  }

  var i = 0; var j = 0; var newI = 0;
  var maxLen = 0; var minLen = 0;

  // Compare the length of two strings. Bigger one will be the outter loop
  if (str1.length < str2.length){
    minLen = str1.length;
    maxLen = str2.length;
    maxStr = str2;
    minStr = str1;
  } else{
    minLen = str2.length;
    maxLen = str1.length;
    maxStr = str1;
    minStr = str2;
  }

  // Logical part using two while loops
  while (i < maxLen){
    j = 0;
    temp = "";
    var target = maxStr[i];

    while (j < minLen){
      if (target === minStr[j]){
        temp += minStr[j];
        console.log("Temp is: ",temp);
        newI++;
        j++;
        target = maxStr[newI];
        if (j < minLen && target != minStr[j]){
          break;
        }
      }
      else{
        j++;
      }
    }

    // Out of the inner loop
    // Ensures our common substring is the greatest
    if (res.length < temp.length){
      res = temp;
    }

    if (newI > i){
      i = newI;
    } else{
      i++;
    }
  }
  console.log("This is the result of greatest common substring: ",res);
  return res;
}

var str1 = "catapults";
var str2 = "ultrasound";
GreatestCommonSubstring(str1, str2)
// console.log("This is the result of greatest common substring: ",GreatestCommonSubstring(str1, str2));
