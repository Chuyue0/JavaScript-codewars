function findsmallerint(args){
    //me
    var minNum=args[0];
    for(var i=1;i<args.length;i++){
        if(minNum>args[i]){
            minNum=args[i];
        }
    }
    console.log(minNum); //2
    //other 1
    console.log(Math.min(...args)); //2
    //other 2
    console.log(Math.min.apply(null,args));//2
    //other 3
    console.log(Math.min.apply(this,args));//2
    //other 4
    console.log(Math.min.apply(Math,args));//2
    //other 5
    console.log(Math.min.apply(0,args));//2
}
findsmallerint([34,15,88,2]);
/*findsmallerint notes
* 找到数组中的最小整数
*   Math对象，调用其属性和方法
*   Math.min() 返回其最小值
*   Math.apply()
*   Math.min.apply(null,args);
*   特殊用法
*   apply可以让一个数组转换为一个参数列表传递给方法，在调用的时候第一个参数传递null参数，因为没有对象去调用这个方法，只需要返回结果就可以了。[arg1,arg2,arg3]->arg1,arg2,arg3 参数列表
*   一般在目标函数不接收数组形式，只接收参数列表，可以通过apply方式来解决。
*/