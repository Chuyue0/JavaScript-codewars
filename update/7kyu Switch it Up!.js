/* Description
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

Try using "Switch" statements.

This kata is meant for beginners. Rank and upvote to bring it out of beta

*/


/*my solution*/
function switchItUp(number){
//Write your own Code!
  switch(number){
    case 0: return "Zero";break;
    case 1: return "One";break;
    case 2: return "Two";break;
    case 3: return "Three";break;
    case 4: return "Four";break;
    case 5: return "Five";break;
    case 6: return "Six";break;
    case 7: return "Seven";break;
    case 8: return "Eight";break;
    case 9: return "Nine";break;
  }
}



/*best practi*/
function switchItUp (number) {
  return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
}


/*clever solution*/
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

/*test cases

Test.describe("Basic Tests",_=>{
Test.assertEquals(switchItUp(1),"One");
Test.assertEquals(switchItUp(3),"Three");
Test.assertEquals(switchItUp(5),"Five");
});

Test.describe("Random Test", _=>{
function switchItUp1(number){
switch (number){
case 0:
return "Zero";
break;
case 1:
return "One";
break;
case 2:
return "Two";
break;
case 3:
return "Three";
break;
case 4:
return "Four";
break;
case 5:return "Five";
break;
case 6:
return "Six";
break;
case 7:
return "Seven";
case 8:
return "Eight";
break;
default:
return "Nine";
}
}
for(var i=0;i<97;i++)
{
var a=Math.floor(Math.random()*10);
Test.assertEquals(switchItUp(a),switchItUp1(a));
}
});


*/
