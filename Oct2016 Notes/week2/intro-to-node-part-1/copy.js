// copy a file from the source to the destination
//
// This acts like the bash command cp (ie. cp file1 file2)
// usage: node copy.js source destination

var fileSystem = require('fs');  // require('angular')

var nameOfMySourceFile = process.argv[2];
var nameOfMyDestinationFile = process.argv[3];

var sourceFileContents = fileSystem.readFileSync(nameOfMySourceFile);
fileSystem.writeFileSync(nameOfMyDestinationFile, sourceFileContents);