function findShort(s){
    //me
    var arr=s.split(" ");
    var minSize=arr[0].length;
    for(var i=1;i<arr.length;i++){
        if(minSize>arr[i].length){
            minSize=arr[i].length;
    }
  }
  console.log(minSize);//3
  //other 1
  console.log(Math.min.apply(this, s.split(" ").map(function (str) {
      return str.length;
  })));//3
  //other 2
  console.log(Math.min(...(s.split(" ").map(s=>s.length)))); //3
}
findShort("bitcoin take over the world maybe who knows perhaps");//3
/*findShort notes
 * 在字符串中找到最短字符串的长度
 * apply和map()函数的结合使用
 * Math.min(...args);We can use the spread operator (...) to spread the array as arguments to Math.min.
 * ES6箭头函数=> Arrow Function
 *   s=>s.length 相当于
 *   function (s){return s.length;}
 *   具有一个参数的简单箭头函数
 *   箭头函数相当于匿名函数
 */