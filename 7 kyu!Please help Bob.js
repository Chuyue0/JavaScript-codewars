/* Description
In English we often use "neutral vowel sounds" such as "umm", "err", "ahh" as fillers in conversations to help them run smoothly.

Bob always finds himself saying "err". Infact he adds an "err" to every single word he says that ends in a consonant! Because Bob is odd, he likes to stick to this habit even when emailing.
*/
/* Task
Bob is begging you to write a function that adds "err" to the end of every word whose last letter is a consonant (not a vowel, y counts as a consonant).

The input is a string that can contain upper and lowercase characters, some punctuation but no numbers. The solution should be returned as a string.
*/
/* Notes
If the word ends with an uppercase consonant, the following "err" will be uppercase --> "ERR".
*/
/* eggs
"Hello, I am Mr Bob" --> "Hello, I amerr Mrerr Boberr"

"THIS IS CRAZY!"  --> "THISERR ISERR CRAZYERR!"
*/
/*my solution*/
function errBob(string){
  var str;
  str=string.replace(/[^aeiou\s]\b/gi,function (c){
    //console.log(c==c.toLowerCase()?c+'err':c+'ERR')
    return c==c.toLowerCase()?c+'err':c+'ERR';
  });
  return str;
}
/*clever solution*/
function errBob(s){
  return s.replace(/[a-z]\b/g, w => w+"err").replace(/[A-Z]\b/g, w=>w+"ERR").replace(/[aeiou]err\b/ig, w => w[0]);
}
/*best practices*/
const errBob = string =>
  string
    .replace(/([bcdfghjklmnpqrstvwxyz])(\W|$)/g, '$1err$2')
    .replace(/([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)/g, '$1ERR$2');
/*test cases*/
/*
describe("errBob(string)", function() {

  it ("should work for fixed tests", function() {
Test.assertEquals(errBob("r r r r r r r r"), "rerr rerr rerr rerr rerr rerr rerr rerr")
Test.assertEquals(errBob("THIS, is crazy!"), "THISERR, iserr crazyerr!")
Test.assertEquals(errBob("hI, hi. hI hi skY! sky? skY sky"),"hI, hi. hI hi skYERR! skyerr? skYERR skyerr")
Test.assertEquals(errBob("Hello, I am Mr Bob."),"Hello, I amerr Mrerr Boberr.")
Test.assertEquals(errBob("This, is. another! test? case to check your beautiful code."),"Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.")
Test.assertEquals(errBob("Hello from the other siiiiideeee"), "Hello fromerr the othererr siiiiideeee")
Test.assertEquals(errBob("Punctuation? is, important!  double space also"), "Punctuationerr? iserr, importanterr!  double space also")
  })
  
  
  it ("should work for random test cases", function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(var k = 0; k<6; k++) {
      for(var j = 2; j < 5; j ++){
        for( var i=3; i < 6; i++ ) {
          text += possible.charAt(Math.floor(Math.random() * possible.length)); 
        }
      text += " ";
      }
      Test.assertSimilar(errBob(text), solution(text));
    }
    
    
   
  })
  
})
*/
