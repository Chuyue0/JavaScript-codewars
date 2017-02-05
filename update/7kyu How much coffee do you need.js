/* Description
Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

Note:

Consecutive integers should be treated as a single number. 
eg, 2015 should be treated as a single number 2015, NOT four numbers
All the numbers should be treaded as positive integer. 
eg, 11-14 should be treated as two numbers 11 and 14. 
Same as 3.14, should be treated as two numbers 3 and 14
If no number was given in the string, it should return 0
Example:

str = "In 2015, I want to know how much does iPhone 6+ cost?"
The numbers are 2015, 6

Sum is 2021.

*/


/*my solution*/
function sumFromString(str){
  if(/^\D+$/.test(str)|| str===null|| str===""){return 0;}
  var arr=str.match(/\d+/g).join(","),sum=0;
  arr=arr.split(",").map(Number);
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

/*best practices*/
function sumFromString(str) {

  var arr = str.split(/\D/g);
  var res = 0;

  for(var i = 0; i < arr.length; i++){
	res += +arr[i];
  }

  return res;
}


/*clever solution*/
function sumFromString(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
}



/*test cases

Test.describe( "sumFromString...", ()=>{
  Test.randomize([
    ["In 2015, I want to know how much does iPhone 6+ cost?", 2021],
    ["1+1=2", 4],
    ["e=mc^2", 2],
    ["aHR0cDovL3d3dy5jb2Rld2Fycy5jb20va2F0YS9uZXcvamF2YXNjcmlwdA==", 53],
    ["a30561ff4fb19170aa598b1431b52edad1fcc3e0", 51820],
    ["x1KT   CmZ__\rYouOY8Uqu-ETtz", 9],
    ["x1KT-8&*@\"CmZ__\rYouO  __Y8Uq\\u-ETtz", 17],
    ["", 0, "Empty string should return 0"],
    ["Hello World",0, "String with no numbers should return 0"]
  ]).forEach(( [inp,exp,msg] )=>{
    console.log('...should work for '+ ( inp? '"'+inp+'"': ' an empty string' ) )
    Test.assertEquals(sumFromString(inp),exp,msg)
  })
  
});



*/
