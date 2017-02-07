/* Description:
This kata is about converting numbers to their binary or hexadecimal representation. 

If a number is even, convert it to binary. 

If a number is odd, convert it to hex.

*/


/*my solution*/
function evensAndOdds(num){
  return num%2==0?num.toString(2):num.toString(16);
}

/*clever solution*/
function evensAndOdds(num){
  return (num&1) ? num.toString(16) : num.toString(2);
}



/*test cases
Test.describe("Basic Tests", function(){
  Test.assertEquals(evensAndOdds(2),'10')
  Test.assertEquals(evensAndOdds(13),'d')
  Test.assertEquals(evensAndOdds(47),'2f')
  Test.assertEquals(evensAndOdds(12800),'11001000000000')
  Test.assertEquals(evensAndOdds(8172381723),'1e71ca61b')
});

*/
