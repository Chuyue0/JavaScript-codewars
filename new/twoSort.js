function twoSort(s) {
    //me 1
    var arr=s.sort(); //object
    var str=arr[0];
    console.log(typeof str); //string
    console.log(str.split("").join("***"));//b***i***t***c***o***i***n
    //me 2
    s=s.sort();
    console.log(s[0].split("").join("***"),s);//b***i***t***c***o***i***n
    //other 1
    console.log(s.sort()[0].split("").join("***"));//b***i***t***c***o***i***n
    //other 2
    var ss='';
    var aa=s.sort();
    var rr=aa[0];//bitcoin ↓6
    for(var i=0;i<rr.length-1;i++){
        ss=ss+rr[i]+"***";
    }
    console.log(ss+rr[rr.length-1]);//b***i***t***c***o***i***n
    
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);//'b***i***t***c***o***i***n' 
/*twoSort notes
* sort()，对字符数组或数字数组排序，操作当前数组
* split()，根据指定的分隔符将字符串分割为多个子串，并返回数组
* join()，用指定分隔符分割数组并转换为字符串；array.join("")->toString();
*/