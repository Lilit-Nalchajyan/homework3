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

  //8.
  const triangleArea = function(base, height){
    return divide(multiply(base, height), 2);
  };
  console.log(triangleArea(3,6));
  //result is 9

  //9.
  const numLength = function(a){
    const str = a + "";
    return str.length;
  };
  console.log(numLength(457685875));
  //result is 9
  
  //10.
  const n = function(num1, num2, num3){
    if (num1.length + num2.length > num3) {
      return 1;
    }
    else{
      return -1;
    }
  };
  console.log(n("Good", "Morning", 13));
  //returns -1
  
  //11.
  const runStuff = function(x, y, z){
    if (x === "rectangle") {
      return multiply(y,z);
    }
    else if (x === "triangle") {
      return triangleArea(y, z);
    }
    else {
      return -1;
    }
  };
  console.log(runStuff("circle", 5, 6));
  //returns -1

  