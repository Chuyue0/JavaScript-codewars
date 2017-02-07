/* Description:

The other day is saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. Lamps represents a row of lamps, currently off, each represented by 'x'. When these lamps are on, they should be represented by 'o'.

The drone string represents the position of the drone 'T' (any better suggestion for character??) and its flight path up until this point '='. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/


/*my solution*/
function flyBy(lamps, drone){
  var str="",lamps;
  for(var i=0;i<drone.length;i++){
    str+="o";
  }
  str=str.split("");
  lamps=lamps.split("");
  var length=lamps.length<str.length?lamps.length:str.length;
  for(var i=0;i<length;i++){
    lamps[i]=str[i];
  }
  lamps=lamps.toString().replace(/,/g,"");
  return lamps;
}


/*clever solution*/
function flyBy(lamps, drone){
  return lamps.split('').map(function(lamp, i) {
    if (/(=)|(T)/.test(drone[i])) lamp = 'o';
    return lamp;
  }).join('');
}


/*best pracitces*/
function flyBy(lamps, drone){
  if(drone.length > lamps.length) return 'o'.repeat(lamps.length)
  return lamps.replace('x'.repeat(drone.length), 'o'.repeat(drone.length))
}


/*test cases

Test.describe("Basic tests",_=>{
Test.assertEquals(flyBy('xxxxxx', '====T'), 'ooooox');
Test.assertEquals(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
Test.assertEquals(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;

function myflyBy(lamps, drone){
var len = lamps.length;
  lamps = lamps.slice(drone.length);
  while (lamps.length < len) lamps = 'o'+lamps;
  return lamps;
  }

var lamp="x";
var dron = '=';
for (var i=0;i<100;i++){
  var lamps=[],len=randint(1,30), drone = [];
  for (var k=0;k<len;k++) lamps.push(lamp);
  lamps=lamps.join('');
  var len2 = randint(0, lamps.length);
  for (var j=0; j<len2;j++) drone.push(dron);
  drone.push('T');
  drone=drone.join('');
  
  Test.it(`Testing for ${lamps} and ${drone}`,_=>{
  Test.assertEquals(flyBy(lamps, drone), myflyBy(lamps, drone),"It should work for random inputs too");
  })
}
})

*/
