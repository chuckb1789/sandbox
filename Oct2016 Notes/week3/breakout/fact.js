angular.module('weatherApp')
    .factory('weatherFactory', weatherFactoryFunction);

// we create a factory and add it to .gitignore so that our super-secret
// personal API key isn't released into the wild on github in our public repository
function weatherFactoryFunction() {
    // I've removed the actual API key but this is where it would go
    var api_key = 'My Special API KEY goes here';

    // our factory will return an object with a single property - our API key
    return {
        APIKEY: api_key
    }
}
    