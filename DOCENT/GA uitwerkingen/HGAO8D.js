var perkament;
var p,pX,pY;
var margeHorizontaal = 125;
var margeVerticaal = 50;

function preload() {
  perkament = loadImage("images/backgrounds/perkament.svg");
  p = loadImage("images/sprites/potlood_400.png");
}

function setup() {
  var myCanvas = createCanvas(944,637);
  myCanvas.parent('processing');
}

function draw() {
  background('cornsilk');
  background(perkament);
  pX = constrain(mouseX,margeHorizontaal,canvas.width - margeHorizontaal);
  pY = constrain(mouseY - p.height,margeVerticaal - p.height,canvas.height - p.height - margeVerticaal);
  image(p,pX,pY);
}