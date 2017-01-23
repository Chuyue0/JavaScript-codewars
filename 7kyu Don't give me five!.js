/* Description
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

*/
/* Example
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/

/*my solution*/
function dontGiveMeFive(start, end)
{
  var count=0,arr=[];
  for(var i=start;i<=end;i++){
    arr.push(i);
    if(!/5+/g.test(i)){
      count++;
    }
  }
  return count;
}
/*clever solution*/
const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)
/*best practices*/
function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

/*test cases
describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(dontGiveMeFive(1,9), 8);
    Test.assertEquals(dontGiveMeFive(4,17), 12);
  });
  it("moreTests", function(){
    Test.assertEquals(dontGiveMeFive(1,90), 72);
    Test.assertEquals(dontGiveMeFive(-4,17), 20);
    Test.assertEquals(dontGiveMeFive(-4,37), 38);
    Test.assertEquals(dontGiveMeFive(-14,-1), 13);
    Test.assertEquals(dontGiveMeFive(-14,-6), 9);
  });
  it("randomTests", function(){
    for(var r=0;r<30;r++)
    {
      var start = Math.floor((Math.random() * 110) - 50);
      var end = Math.floor((Math.random() * (80 - start - 1)) + start + 1);
        
      var expectedCount = 0;
      for(var i=start;i<=end;i++)
      {
        if(!(i + "").includes("5"))
        {
          expectedCount++;
        }
      }

      Test.assertEquals(dontGiveMeFive(start, end), expectedCount);
    }    
  });
});

*/
