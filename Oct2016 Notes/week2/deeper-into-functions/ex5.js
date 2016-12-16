function five( one, two, three, four, five){

  console.log(one, two, three, four, five);

}

five('a','b','c','d','e');

function curry(first_arg, fn){
  return function (two, three, four, five ){
    fn(first_arg, two, three, four, five);
  }
}

var four = curry('a', five);

four('b','c','d','e');
four(2,3,4,5);
