/* Description
Create a function which answers the question "Are you playing Banjo?". 
If your name starts with the letter "R" or lower case "r", you are playing Banjo!

The function takes a name as its only argument, and returns one of the following strings:

C# name + "plays banjo" name + "does not play banjo"

Names given are always valid strings.

*/


/*my solution*/
function areYouPlayingBanjo(name) {
  // Implement me
  var s=name.slice(0,1);
  return s=='r'|| s=='R'?name+" plays banjo":name+" does not play banjo";
}



/*clever solution*/
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}




/*test cases
Test.assertEquals(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
Test.assertEquals(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
Test.assertEquals(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
Test.assertEquals(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
Test.assertEquals(areYouPlayingBanjo("rolf"), "rolf plays banjo");



*/
