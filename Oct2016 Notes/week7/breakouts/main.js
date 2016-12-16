// Problem set #4
var string = "djfhh376 sdhks12 j78 1 jh2"+ "x";

var currString = "";
var wholeNumbers = [];

for(var i = 0; i < string.length; i++) {
  
    // we've found a digit
    if(!isNaN(parseInt(string[i]))) {
        // "f" = NaN
        // "5" = 5
        currString += string[i];
    } 
    // not a number
    else {
        var num = parseInt(currString);
        
        if(!isNaN(num)) {
            wholeNumbers.push(num);
        }

        currString = "";
    }
}

console.log(wholeNumbers);

var total = 0;
wholeNumbers.forEach(function(num){
    total+= num;
});

console.log(total);

// regular expression way to solve this 
var total = 0;
"djfhh376 sdhks12 j78 1 jh2".match(/\d+/g).forEach(function(num){ 
    total += parseInt(num) 
})
console.log(total);




var string = "Hello6 9World 2, Nic8e D7ay!";

console.log("Result: ", string.match(/\d+/g))

var total = 0;
string.match(/\d+/g).forEach(function(num){
    total += parseInt(num);
});

var letters = string.match(/[A-Za-z]/g);
console.log("Letters in array: ", letters.length);

var average = total / letters.length;

console.log("Total: ", total);
console.log("Average: ", Math.round(average));