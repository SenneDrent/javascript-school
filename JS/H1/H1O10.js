function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  background('lavender');
  noStroke();
  //noLoop();
}

function draw() {
  fill('wheat');
  rect(0,0,width,30);
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY,10);
}
