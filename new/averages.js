function averages(numbers) {
	//
    var arr=[];
    if(numbers==null || numbers.length==0 ) return [];
    for(var i=0;i<numbers.length;i++){
        if(numbers[i+1] != null){
            arr[i]=(numbers[i]+numbers[i+1])/2;
        }
    }
    console.log(arr);
    //other solution 1
    var arr=[];
    if(numbers){
        for(var i=0;i<numbers.length-1;i++){
            arr.push((numbers[i]+numbers[i+1])/2);
        }
    }
    console.log(arr);
    //other solution 2
    var arr=[];
    // arr=numbers?numbers.map(function (curr,i,arr){(curr+arr[i+1])/2}).slice(0,-1):[]; error?
    arr=numbers?numbers.map((curr,i,arr)=>(curr+arr[i+1])/2).slice(0,-1):[];
    console.log(arr);
}
averages([2, 2, 2, 2, 2])//[2, 2, 2, 2]
averages([2, -2, 2, -2, 2])//[0, 0, 0, 0]
averages([1, 3, 5, 1, -10])//[2, 4, 3, -4.5]
/**averages notes
 * 补充arrobj.push(),向数组的末尾添加元素。
 */
