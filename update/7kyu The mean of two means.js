/* Description
Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). 
The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. 
Otherwise the function should return -1.

getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.

*/


/*my solution*/
function getMean(arr, x, y) {
  var ax=arr.slice(0,x);
  var ay=arr.slice(-y);
  if(x<=1){
    return -1;
  }else{
    var averx,sum=0;
    for(var i=0;i<ax.length;i++){
      sum+=ax[i];
    }
    averx=sum/x;
  }
  if(y>arr.length){
    return -1;
  }else{
    var avery,sum=0;
    for(var i=0;i<ay.length;i++){
      sum+=ay[i];
    }
    avery=sum/y;
  }
  return (averx+avery)/2;
}


/*best practi*/
function getMean(arr, x, y) {
  var m1=0, m2=0, array1=[];  
  if(x < 2 || y < 2 || x > arr.length || y > arr.length)  return -1;
  
  for(var i=arr.length-1; i>=0; i--)  array1.push(arr[i]);
  
  for(var i=0; i < arr.length; i++){
    if(i<x)m1 += arr[i];
    if(i<y)m2 += array1[i]; 
  }
  return (m1/x + m2/y)/2;
}

/*clever solution*/
const getMean=(arr, x, y)=>x<2 || y<2 || x>arr.length || y>arr.length ? -1 : (arr.slice(0,x).reduce((a,b)=>a+b)/x+arr.slice(-y).reduce((a,b)=>a+b)/y)/2;

/*test cases
Test.describe("Basic Tests", function() {
  Test.assertEquals(getMean([1,3,2,4],2,3),2.5);
  Test.assertEquals(getMean([1,3,2],2,2),2.25);
  Test.assertEquals(getMean([1,3,2,4],1,2),-1);
  Test.assertEquals(getMean([1,3,2,4],2,8),-1);
});

Test.describe("Random Tests", function() {

function getMeanCheck(arr, x, y){
     
      if(x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
        return -1;
      }

      var sum1 = 0;
      for (var i = 0; i < x; i++) {
        sum1 += arr[i];
      }
      var mean1 = sum1/x;

      var sum2 = 0;
      for (var j = arr.length - 1; j >= (arr.length - y); j--) {
        sum2 += arr[j];
      }
      var mean2 = sum2/y;
    
      return (mean1 + mean2)/2;
     
}

 for (var k = 0; k < 100; k++){
  var randomx = Math.round(Math.random() * 100); 
  var randomy = Math.round(Math.random() * 100);
  var arrLength = Math.round(Math.random() * 100);
  var randomarr = [];
  for (var z = 0; z<arrLength; z++) {
    randomarr.push(Math.round(Math.random() * 100));
    }
  console.log('randomarr is', randomarr);
  console.log('randomx is', randomx);
  console.log('randomy is', randomy);
  Test.assertEquals(getMean(randomarr, randomx, randomy), getMeanCheck(randomarr, randomx, randomy));
}

});


*/
