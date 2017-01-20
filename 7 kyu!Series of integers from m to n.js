/* Description
Write a function generateIntegers/generate_integers that accepts two arguments m/$m and n/$n and generates an array containing the integers from m to n inclusive.

For example, generateIntegers(2, 5)/generate_integers(2, 5) should return [2, 3, 4, 5].

m/$m and n/$n can be any integers greater than or equal to 0.

n/$n will always be greater than or equal to m/$m.
*/
/*my solution*/
function generateIntegers(m, n) {
  var arr = [];
  for(var i = m; i <= n; i++){
    arr.push(i)
  }
  return arr
}
/*clever solution*/
function generateIntegers(m, n) {
  return Array.from({length:n-m+1},(_,i)=>i+m)
}

/*test cases*/
/*
var _m;
[ [0, 0],
  [0, 5],
  [2, 5],
  [11, 20],
  [_m = ~~(Math.random()*100), _m+0],
  [_m = ~~(Math.random()*100), _m+1],
  [_m = ~~(Math.random()*100), _m+~~(Math.random()*100)] ].map(function(a) {
  Test.assertSimilar(generateIntegers(a[0], a[1]), generateIntegers_expected(a[0], a[1])); });
*/