function countPositivesSumNegatives(input) {
    var count=0,sum=0;
    if(input===null || input.length===0){
        return [];
    }else{
      for(var i=0;i<input.length;i++){
        if(input[i]>0){
          count+=1;
        }else if(input[i]!=0){
          sum+=input[i];
        }
      }
      return [count,sum];
    }
}
var testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
var testData2 = [];
countPositivesSumNegatives(testData);//[8, -50]
countPositivesSumNegatives(testData2);//[]
/* countPositivesSumNegatives notes
 * 返回数组，正数的个数和负数的和
 * 考虑到整数0和数组为空的需求判断，另count++和count+=1相互使用情况；
 */