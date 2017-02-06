/* Description

Everybody know that you passed to much time awake during night time...

Your task here is to define how much coffee you need to stay awake after your night. 
You will have to complete a function that take an array of events in arguments, according to this list you will return the number of coffee you need to stay awake during day time. 
Note: If the count exceed 3 please return 'You need extra sleep'.

The list of events can contain the following:

You come here, to solve some kata ('cw').
You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
You just watch a movie ('movie').
Other events can be present and it will be represent by arbitrary string, just ignore this one.
Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

*/


/*my solution*/
function howMuchCoffee(events) {
  if(events.length==0||events=="null"){return 0;}
  var regx=/^(cw|dog|cat|movie)+$/,regd=/^(CW|DOG|CAT|MOVIE)+$/;
  var count=0;
  for(var i=0;i<events.length;i++){
    if(regx.test(events[i])){
      count=count+1;
    }else if(regd.test(events[i])){
      count=count+2;
    }
  }
    if(count>=4){return 'You need extra sleep';}
    return count;
}

/*best practices*/
function howMuchCoffee(events) {
  var coffeeCount = 0; 
  events.forEach(function(entry) {
    var matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
    coffeeCount += matches ? (matches[2] ? 1 : (matches[3]? 2:0)):0;

  });
  return coffeeCount > 3 ? "You need extra sleep":coffeeCount;
}


/*clever solution*/
function howMuchCoffee(events) {
  var res = events.map(function(x){
    return /^(cw|dog|cat|movie)$/.test(x) ? 1 : /^(CW|DOG|CAT|MOVIE)$/.test(x) ? 2 : x;
  }).filter(x => /^[12]$/.test(x)).reduce((x,y) => x+y,0);
  return res > 3 ? 'You need extra sleep' : res;
}



/*test cases
Test.describe('Basic Tests',_=>{
  Test.assertEquals(howMuchCoffee([]), 0)
  Test.assertEquals(howMuchCoffee(['cw']), 1)
  Test.assertEquals(howMuchCoffee(['CW']), 2)
  Test.assertEquals(howMuchCoffee(['cw','CAT']), 3)
  Test.assertEquals(howMuchCoffee(['cw','CAT','DOG']), 'You need extra sleep')
  Test.assertEquals(howMuchCoffee(['cw','CAT', 'cw=others']), 3)
})
Test.describe('Random Tests',_=>{

function howMuchCoffeeSol(events) {
  var res = 0 
  var know_events = ['cw','cat','dog','movie']
  events.forEach(function(e){
    if (know_events.includes(e.toLowerCase())) {
      if (e == e.toLowerCase()) {
        res = res + 1 
      } else {
        res = res + 2
      }
    }
  })
  return res <= 3 ? res : "You need extra sleep"
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

function randomEvents() {
  var ets = ['cw','CW','dog','DOG','cat','CAT','movie','MOVIE',
     'other_1', 'other_2','other3','other',
     'OTHER_1', 'OTHER_2','OTHER3','OTHER']
  return [ets.sample(),ets.sample(),ets.sample()]  
}

for (var i=0;i<40;i++){
  var e = randomEvents()
  Test.it(`Testing for ${e}`,_=>{
    Test.assertEquals(howMuchCoffee(e), howMuchCoffeeSol(e),"It should work for random inputs too");
  })
}

})


*/
