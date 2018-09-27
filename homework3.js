//1.
const sum = function(x,y,z) {
    return x+y+z;
}
console.log(sum(3,5,2));
//result 10

//2. 
const noArguments = function() {
    return 456;
}
console.log(noArguments());
//returns 456

//3. ????????????
const sum = function(x,y,z) {
    sum1 = x+y+z;
}
//Doesn't return anything

//4.
const longestString = function(str1, str2, str3) {
    if (str1.length > str2.length && str1.length > str3.length) {
      return str1;
    }
  else if(str2.length > str1.length && str2.length > str3.length) {
    return str2;
  }
  else {
    return str3;
  }
}
console.log(longestString('auf', 'jkkjh', 'bjkhhgg'));
//returns 'bjkhhgg'

//5.
const num = function(x,y) {
    if (x === y) {
      return 0;
    }
    else if (x > y) {
      return 1;
    }
    return -1;
  }
  console.log(num(2,3));
  //returns -1

  //6.
  const multiply = function(x,y) {
      return x * y;
  }
  console.log(multiply(2,3));
  //result is 6

  //7.
  const divide = function(x,y) {
      return x / y;
  }
  console.log(divide(6,2));
  //result is 3;

  