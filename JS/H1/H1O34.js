var aantal = 100;
var x;
var y;
var diameter;

function setup() {
  var myCanvas = createCanvas(451,451);
  myCanvas.parent('processing');
  frameRate(5);
  // noLoop();
  strokeWeight(4);
  stroke('steelblue');
}

function draw() {
  background('white');
  for (var c = 0; c <= 100; c++) {
    x = random(50, 400);
    y = random(50, 400);
    diameter = random(25, 75);
    ellipse(x, y, diameter);
  }
}
