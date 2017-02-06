/* Description
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
input :
A word (string) of length 0 < str < 1000	
output :
The middle character(s) of the word represented as a string.

*/
/* Example
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

/*my solution*/
function getMiddle(s)
{
  var sLen=s.length;
  if(sLen%2==0){
    //偶数
    return s.substr((sLen/2)-1,2);
  }else{
    return s.substr((sLen/2),1);
  }
}
/*clever solution*/
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/*test cases
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
Test.describe("50 Random tests",function() {
//----------------
function randint(a, b) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
function GetMiddleT(s)
{
    var middle = Math.floor(s.length/2);
    if (s.length % 2 == 0)
        return s[middle-1] + s[middle];
    else
        return s[middle];
}
//----------------
    for (var i = 0; i < 50; i++) {
      var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var rando = randint(1,1000);
      var randStr = "";
      for (var j = 0; j<rando; j++)
      {
        var x = randint(0, alph.length);
        randStr += alph[x]; 
      }
      Test.it("Random Testing", function() {
          Test.assertEquals(getMiddle(randStr), GetMiddleT(randStr));
      }
    )}
  })

*/
