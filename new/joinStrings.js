function joinStrings(string1, string2){
   // code here
   return `${string1} ${string2}`;
}
//other solution 1
	joinStrings =(s1,s2)=>`${s1} ${s2}`;
//other solution 2
	const joinStrings=(a,b)=>`${String(a)} ${String(b)}`;
joinStrings('testing', 'testing');

/*joinStrings notes
* 箭头函数参数有两个以上或无参数，需要用括号()括起来；(x,y)=>x+y
* ES6新特性 模板字符串``，所有的空格和样式都会被保留在``中，用$()来引用变量；
*           变量声明const,但声明的是常量，值不变。
*/