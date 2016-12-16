var word = prompt ("Please enter a word.", ' ');

var characters = word.charAt (word.length);

var lowercaseword = word.toLowerCase ();

var uppercaseword = word.toUpperCase ();

var sentence = (word+" is a great word!");

var substring = (word.charAt (2) + word.charAt (3) + word.charAt (4));

alert (word+" "+characters+" "+lowercaseword+" "+uppercaseword+" "+sentence+" "+substring);
