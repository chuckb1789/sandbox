// write a application that takes a string argument and reverses the characters and prints it out
// usage: node reverse.js pupils
// expected output: slipup

var reverseMyString = function(originalString) {
    console.log('Original String', originalString)

    var splitString = originalString.split('');
    console.log('Split String', splitString);

    // SplitString = [ 'p', 'u', 'p', 'i', 'l', 's' ]

    /////
    // Reverse using a for loop
    /////
    // for (var i = splitString.length - 1; i >= 0; i--) { 
    //     reverseArray += splitString[i]; // or newString = newString + str[i];
    // };

    /////
    // Reverse using a built in function of array
    /////
    var reverseArray = splitString.reverse();

    // reverseArray = [ 's', 'l', 'i', 'p', 'u', 'p' ]

    var reversedString = reverseArray.join('');
    console.log('Reverse', originalString, 'and created', reversedString)
}

reverseMyString(process.argv[2])
reverseMyString('kurt')

module.exports = {
    reverseIt: reverseMyString
}