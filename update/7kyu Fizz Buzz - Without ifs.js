/* Description
I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)
You need to implement a function that applies the standard fizz buzz test:
If a number is divisible by 3, return Fizz
If it is divisible by 5, return Buzz
If it is divisible by both 3 and 5, return FizzBuzz
If it is not divisible by 3 or 5, return the number itself
However, when making the function, you cannot use if (meaning else is also not an option).
Input:
A number will always be provided
The number provided will always be positive and an integer
Example:
6 should return Fizz
10 should return Buzz
15 should return FizzBuzz
17 should return 17

*/

/*my solution*/
function fizzBuzz(n){
  var j= (n%3==0&&n%5==0) ? "FizzBuzz" : (n%3==0 ? "Fizz" : ((n%5==0) ? "Buzz" : n ));
  return j;
};

/*clever solution*/
const fizzBuzz = n => n%15 ? n%5 ? n%3 ? n : "Fizz" : "Buzz" : "FizzBuzz" ;

/*best practices*/
const fizzBuzz = n => {
  return (n % 15 === 0 && "FizzBuzz") || 
         (n % 3 === 0 && "Fizz") || 
         (n % 5 == 0 && "Buzz") || 
         n
}

/*test cases
Test.describe("Fizz buzz without ifs", () => {
  var sampleFizzBuzz = n => (n % 3) ? ((n % 5) ? n : 'Buzz') : ((n % 5) ? 'Fizz' : 'FizzBuzz');

  Test.it("Basic checks", () => {
    Test.expect(fizzBuzz != undefined, "You have not defined the fizzBuzz function!")
    Test.expect(fizzBuzz.toString().indexOf("if") == -1, "You cannot use if statements!");
  });
  
  Test.it("Random tests", () => {
    for(var i = 0; i < 250; i++) {
      var n = Test.randomNumber();
      
      Test.assertEquals(fizzBuzz(n), sampleFizzBuzz(n));
    }
  });
});

*/
