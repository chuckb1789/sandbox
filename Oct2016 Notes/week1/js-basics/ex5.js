// Object literals

var obj = {} ;
console.log("obj: ", obj);

var obj2 = {
  fred : "flintstone",
  barney : "rubble"
}
obj['wilma and betty'] = "wives" ;
console.log("obj: ", obj);


console.log("obj2: ", obj2);

console.log("obj2.fred: ", obj2.fred);

console.log("obj2['fred']: ", obj2['fred']);

var movie = {
  title: "Thor",
  owner: "Marvel"
}
 console.log("I love the movie", movie.title, 'made by', movie.owner);
