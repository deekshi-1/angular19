function fibinoci(len) {
  let a = 0;
  let b = 1;
  let str = " ";
  if (len == 1) return a;
  if (len == 2) return b;
  str = a + " " + b + " ";
  for (i = 3; i <= len; i++) {
    str = str + b + " ";
    c = b;
    b = a + b;
    a = c;
  }
  return str;
}

function prime(num) {
  if (num == 1 || num == 0) return "nor prime or composite";
  flag = false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) flag = true;
  }
  if (flag) {
    return "not prime";
  } else return "prime";
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

function factorial(a) {
  console.log("Factorial of ", a, " are");
  let str = " ";
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) str += i + " ";
  }
  return str;
}

function sumofThree(a, b, c) {
  return a + b + c;
}

module.exports = {
  prime,
  sumofThree,
  strReverse,
  factorial,
  fibinoci,
};
