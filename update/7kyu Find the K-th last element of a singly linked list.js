/* Description
Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

The function must return a falsy value for invalid input values, like an out of range index.

So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

Other examples:

getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2

*/


/*my solution*/


/*best practices*/
function getKthLastElement(head, k) {
  for (var tail=head,r=[];tail!=null;tail=tail.next) r.unshift(tail)
  return r[k]
}

/*clever solution*/
function getKthLastElement(head, k) {
  var arr = [];
  for (; head; head = head.next) arr.push(head);
  return arr[arr.length - k - 1] || false;
}


/*test cases
function buildTheList(elements) {
  if (!elements.length)
    return null;
  const head = new Node(elements[0]);
  let prev = head;
  for(let i = 1 ; i < elements.length; i++) {
    const newNode = new Node(elements[i]);
    prev.next = newNode;
    prev = newNode;
  }
  
  return head;
}
for (let i = 0; i < 10; i++) {
  const array = Test.randomize([...Array(Test.randomNumber() % 50 + 1).keys()]);
  describe("Test random list with elements: " + array.join(), function(){
    const list = buildTheList(array);
    const random = (Test.randomNumber() % array.length);
    
    it ("should return last element when k == 0", function(){
      Test.assertEquals(getKthLastElement(list, 0).data, array[array.length - 1]);
    });
    
    it ("should return first element when k == list.length - 1", function(){
      Test.assertEquals(getKthLastElement(list, array.length - 1).data, array[0]);
    });
    
    it ("should return correct element when k is " + random, function(){
      Test.assertEquals(getKthLastElement(list, random).data, array[array.length - 1 - random]);
    });
    
    it ("should return falsy when k == list.length", function(){
      Test.expect(!getKthLastElement(list, array.length));
    });
  });
}
describe("Negative tests", function(){
  it ("should return falsy when k is negative", function(){
    Test.expect(!getKthLastElement(new Node(1, new Node(2, new Node(3))), -1));
  });
  
  it ("should return falsy when list is empty (null)", function(){
    Test.expect(!getKthLastElement(null, -1));
  });
});

*/
