/* Description
Write a function called calculate that takes 3 values. 
The first and third values are numbers. 
The second value is a character. 
If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null.
calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/
/*my solution*/
function calculate(num1, operation, num2) {
 var values;
  switch(operation){
    case "+": values=num1+num2;break;
    case "-": values=num1-num2;break;
    case "*": values=parseFloat(num1*num2);break;
    case "/": values=(num2==0?null:num1/num2);break;
    default :  values=null;break;
  }
  return values;
}
/*clever solution*/
function calculate(num1, operation, num2) {
  var ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };
  return (ops[operation] || function() { return null; })(num1, num2);
}

/*test cases*/
/*
Test.assertSimilar(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
Test.assertSimilar(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
Test.assertSimilar(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
Test.assertSimilar(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
Test.assertSimilar(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
Test.assertSimilar(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
Test.assertSimilar(calculate(-3,"/", 0), null, "-3 / 0 = null")
Test.assertSimilar(calculate(-2, "/", -2), 1, "-2 / -2 = 1")
Test.assertSimilar(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
Test.assertSimilar(calculate(-3,"w", 0), null, "-3 w 0 = null")
*/
