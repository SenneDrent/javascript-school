var perkament;
var p;
var pX = 30;
var pY = 40;
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
  // background(perkament);
}