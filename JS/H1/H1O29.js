var schaal;
var Nbloemen = 6;
var aantal = 5;

function setup() {
  var myCanvas = createCanvas(1000,450);
  myCanvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20); 
  translate(0.5*schaal, 225);
  schaal = width / Nbloemen;
  for (var n = 0; n <= Nbloemen; n++) {  
    tekenBloem(0.1*Nbloemen, aantal);
    translate(schaal, 0);
  }

  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }
}

function tekenBloem (s, i) {
  push();
  scale(s);
  fill(178, 34, 34,0.7);
  for (var n = 0;n < i;n++) {
    ellipse(0,0,400,50);
    rotate(360 / i);
  }
  fill(255, 195, 0,0.5);
  for (var n = 0;n < i;n++) {
    rect(0,0,75,75);
    rotate(360 / aantal);
  }   
  pop();
}
