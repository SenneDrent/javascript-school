function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  noStroke();
}

var eX = 450;

function draw() {
  background('silver');
  if (eX <= 200) {
      background('black');
  }
  
  // de toevoeging == true is niet nodig
  if (mouseIsPressed == true) {
      fill('khaki');
  }
  else {
      fill('steelblue');
  }
  
  ellipse(0,0,800);
  fill('deepskyblue'); 
  ellipse(eX,450,400);
  eX--;
}