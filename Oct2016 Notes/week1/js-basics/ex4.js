/*
 * Loop examples
 */

 var ary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
     //     0, 1, 2, .....             9 ary[10] is what?
 var i = 0;
 while( i < 10){
   console.log("i is: " + i);
   i ++ ;
 }

for(var i =  0; i < 10; i++){
  console.log("For loop i is: ", i);
}

var ix = ary.length ;
while(ix >= 0){
  console.log("ary["+ix+"]: ", ary[ix]);
  ix -- ;
}
// Predicted result: 9,8,7,6,5,4,3,2,1,0
// actual:           undefined, 9, 8, ... 0

//   init                 ; while  ; incr
for(var ix = ary.length-1 ; ix >= 0; ix --){
  console.log("veeblefeetzer: " + ix + ": ", ary[ix]);
}

for(var ix = 0; ix < 10; ix++){
  console.log("ary["+ix+"]: ", ary[ix]);
}

for(var ix = 0; ix < ary.length ; ix++){
  console.log("ary["+ix+"]: ", ary[ix]);
}

for(var i = 1; i < 10; i++) {
  console.log("Learning loops", i);
}

var Charlie = ['Bronco','Elantra','Impreza Outback Sport','Escape','FJCruiser','Tacoma'];
for(var i = 4; i >= 0; i--){
  console.log ("I have owned an", Charlie[i]);
}

for(var i=5; i>=5; i--) {
  console.log ("I want to buy a", Charlie[i]);
}

for(var i = 0; i < 1 ; i++) {
  console.log ("I wish I had my", Charlie[i], "back.");
}
