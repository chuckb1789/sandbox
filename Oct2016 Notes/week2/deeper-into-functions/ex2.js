// More scopes, and functions as objects

function fred() {
  console.log("I'm Fred");
}
function barney() {
  console.log("I'm Barney");
}

console.log("fred is: ", fred);

fred();
barney();

function bedrock(person){
  console.log("In Bedrock");
  console.log(person);
  person();
}

bedrock(fred);
bedrock(function(){
  console.log("I'm anonymous!");
});

bedrock("A string");
