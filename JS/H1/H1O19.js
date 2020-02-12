var p = 100;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow');
  tekenRechthoek(p);  
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke('green');
  //rect(0, p, width, height-p);
  line(0, p, p, 0);
  line(p, 0, width, height- p);
  line(0, p, width - p, height);
  line(width - p, height, width, height - p);
  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke('red');
  line(0, height - p, p, 0);
  line(p, 0, width, p);
  line(0, height - p, width - p, height);
  line(width - p, height, width, p);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}