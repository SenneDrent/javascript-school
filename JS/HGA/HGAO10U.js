var achtergrond;
var flatboyX = -140;
var flatboyBreedte = 258;
var flatboyHoogte = 237;

function preload() {
  achtergrond = loadImage("images/backgrounds/green_grass_landscape.svg");
}

function setup() {
  var myCanvas = createCanvas(750,435);
  myCanvas.parent('processing');
  frameRate(20);
}

function draw() {
  background(255);
  background(achtergrond);
}