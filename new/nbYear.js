function nbYear(p0, percent, aug, p) {
    // your code ,separate execution
    var count=0,per=percent/100;
    while(p0<p){
      p0=parseInt(p0+ p0*per + aug);
      // p0=sum;
      count++;
    }
    console.log(count); //15
    //other 1
    for(var i=0;p0<p;i++){
        p0=p0*(1+percent/100)+aug;
    }
    console.log("i:"+i); //15
    //other 2
    var counts=0;
    while(p0<p){
        p0+=p0*(percent/100)+aug;
        counts++;
    }
    console.log("counts"+counts); //15
}
nbYear(1500, 5, 100, 5000);//15 p0+p0*(percent/100)+aug < p