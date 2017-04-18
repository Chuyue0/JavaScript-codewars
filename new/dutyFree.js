function dutyFree(normPrice, discount, hol){
    //me
    var count=0;
    while(normPrice*discount/100*count < hol){
      count=count+1;
    }
    console.log(count-1); //167 295 358
    //other solution 1
    console.log(Math.floor(hol/(normPrice*discount/100)));
    //other solution 2
    var savings=normPrice*(discount/100);
    console.log(Math.floor(hol/savings));
}
dutyFree(12, 50, 1000);//166
dutyFree(17, 10, 500);//294
/**dutyFree notes
 * js数学计算Math.floor()向下取整；
 */