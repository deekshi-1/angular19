function strPalindrom(str) {
  let len = str.length - 1;
  let i = 0;
  let flag = true;

  while (i < len) {
    if (str[i] !== str[len]) {
      flag = false;
      break;
    }
    i++;
    len--;
  }

  if (flag) return "palindrome";
  else return "not palindrome";
}

function strReverse(str) {
  let len = str.length - 1;
  tempStr = "";
  while (len >= 0) {
    tempStr += str[len];
    len--;
  }
  return tempStr;
}

module.exports = { strPalindrom, strReverse };
