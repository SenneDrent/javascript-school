function setup() {
  var myCanvas = createCanvas(450,450);
  background('lavender');
  myCanvas.parent('processing');
  noLoop();
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(RGB, 255, 255, 255, 1);
  fill(178, 34, 34,.5);
}

function draw() {
  noStroke();
  translate(225,225);
  rect(0,0,200,200);
  push();
  rotate(45);
  
  rect(0,0,200,200);
  pop();
  fill(255,225,0);
  rect(0,0,50,50);
}
