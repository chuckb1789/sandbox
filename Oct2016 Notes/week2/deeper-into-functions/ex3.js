// Callbacks

// function tick(){ console.log("tick");}
// function tock(){ console.log("tock");}
var even = 0;

function clock(){
  ((even++ % 2)==0) ? console.log("Tick: ", new Date())
                    : console.log("Tock: ", new Date()) ;
}
// setInterval(tick, 1000);
// setInterval(tock, 1000);

setInterval(clock, 1000);
