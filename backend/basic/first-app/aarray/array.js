function largArry(array) {
  big = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    if (big < array[i]) big = array[i];
  }
  return big;
}

function sumArry(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function pattern(len) {
  for (let i = 1; i <= len; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*" + " ";
    }
    console.log(str);
  }
}

function dup(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    flag = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === newArray[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function intersection(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    flag = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

function merge(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return dup(array1);
}

console.log(largArry([776, 6, 9, 12, 45, 244]));
console.log(sumArry([776, 6, 9, 12, 45, 4]));
console.log(dup([7, 7, 6, 6, 9, 12, 4, 5, 4]));
console.log(dup([7, 7, 6, 6]));
console.log(intersection([7, 5, 4, 6], [27, 3, 4, 16, 7]));
console.log(merge([7, 5, 4, 6], [27, 3, 4,7]));
pattern(5);