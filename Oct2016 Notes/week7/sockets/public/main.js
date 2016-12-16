// creates socket connection to server
var socket = io();

// send a random number to the server every 2 seconds
setInterval(function(){
    socket.emit('number', Math.random());
}, 2000);

// when newNumber event is received, add it to the page
socket.on('newNumber', function(data){
    document.body.innerText += data + '\n';
});

// when tweeter event is received, add it to the page
socket.on('tweeter', function(data){
    console.log(data);
    document.body.innerText += data.text + '\n';
});