/* Description
An array is given with palindromic and non-palindromic numbers. 
Palindromic number is a number that is the same from a reveresed order. 
For example 122 is not a palindromic number but 202 is one.

Your task is to write a function that returns an array with only 1s and 0s, where all palindromic number is replaced with a 1 and all non-palindromic number of the original array replaced with a 0.

For example:

[101, 2, 85, 33, 14014] will return [1, 1, 0, 1, 0]

and [45, 21, 303, 56] will return [0, 0, 1, 0]

*/


/*my solution*/
function convertPalindromes(numbers) {
  var str="",arr="";
  for(var i=0;i<numbers.length;i++){
    str=numbers[i].toString().split("").reverse().join("");
    if(str==numbers[i]){
      arr+="1";
    }else{
      arr+="0";
    }
  }
  return arr.split("").map(Number);
};

/*best practices*/
function convertPalindromes(numbers) {
  return numbers.map(str => Number(str.toString() == str.toString().split('').reverse().join('')))
};




/*test cases
Test.describe("Basic Tests", function() {
  Test.it('should return [1, 1, 0, 0, 0] on [22, 303, 76, 411, 89]', function(){
      Test.assertSimilar(convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0]);
  });
  Test.it('should return [0, 0, 1] on [653, 808, 5]', function(){
      Test.assertSimilar(convertPalindromes([653, 808, 5]), [0, 1, 1]);
  });
  Test.it('should return [1, 0, 0, 1, 0, 1] on [4, 23, 441, 565, 19, 818]', function(){
      Test.assertSimilar(convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1]);
  });
});
Test.describe("Random test", function() {
  function generateRandomInputAndAnswer() {
     function randomNumber () {
        var n = 0;
        var random = Math.random() * 10;
        if (random < 5){
           n = Math.floor(Math.random() * 100);
           return n;
        } else {
           var m = Math.floor(Math.random() * 100).toString();
           var palindromicm = m;
           for (var i = m.length - 1; i >= 0; i--){
              palindromicm += m[i];
           }
         return parseInt(palindromicm);
       }
     }

    var numbers = Array(1 + Math.floor(Math.random() * 20)).fill(0).map(randomNumber);
    
    function check(n){
      var reversed ='';
      n = n.toString();
      for (var i = n.length-1; i >=0; i--){
         reversed += n[i];
      }
      if (reversed === n){
         return true; 
      } else {
         return false; 
      }
    }

    function _convertPalindromes(numbers) {
       var newList = []; 
       for (var i = 0; i < numbers.length; i++) {
          if (check(numbers[i]) === true){
            newList.push(1);
          } else {
            newList.push(0);
          }
        }
       return newList;
    };
    return [numbers, _convertPalindromes(numbers)];
  }

  for (var test_loop = 0; test_loop < 40; test_loop++) {
    var q_and_a = generateRandomInputAndAnswer();
     Test.it('should return [' + q_and_a[1] + '] on [' + q_and_a[0] + ']', function(){
      Test.assertSimilar(convertPalindromes(q_and_a[0]), q_and_a[1]);
     });
  }
});



*/
