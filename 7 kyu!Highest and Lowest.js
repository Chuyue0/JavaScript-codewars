/* Description
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
/* Example
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
/* Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
/*my solution*/
function highAndLow(numbers){
  var arr=numbers.split(" ").map(Number);
  return [Math.max.apply(this,arr),Math.min.apply(this,arr)].map(String).join(' ');
}
/*clever solution*/
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

/*test cases*/
/*
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");
Test.assertEquals(highAndLow("-1 -1"), "-1 -1");
Test.assertEquals(highAndLow("1 -1 0"), "1 -1");
Test.assertEquals(highAndLow("1 1 0"), "1 0");
Test.assertEquals(highAndLow("-1 -1 0"), "0 -1");
Test.assertEquals(highAndLow("42"), "42 42");

Test.describe("Random tests", function(){
  var t = 10, rnd = Math.random;
  while(t--){
    var min = ~~(rnd()*1e4)-5e3, 
        max = min+3e3+~~(rnd()*100), 
        rr = [], exp = max+" "+min;
    for( var i=1; i< 20; i++ ) rr.push(min+~~(rnd()*3e3));
    
    rr = rr.slice(10).concat([min,max]).concat(rr.slice(0,10));
    rr = rr.sort(function(){return rnd()<.5 ? 1:-1 }).join(" ");

    Test.assertEquals(highAndLow(rr),exp)
  }
});
*/
