var square = {
    name: 'square',
    length : 5,
    width :3
}

var trapazoid = {
    name: 'trapazoid',
    length : 4,
    width : 72
}

var shapes = [square, trapazoid]

function area(length, width) {
  return length*width
}

for (var i=0; i <shapes.length; i++){
  console.log(shapes[i].name + " has a length of "+shapes[i].length+" and a width of "+shapes[i].width+' and an area of '+ area(shapes[i].length, shapes[i].width));
}
