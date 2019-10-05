
/*  **********************************************************
    **                BEGIN klasse Cirkel                   **
    ********************************************************** */


class Cirkel {
  constructor(g) {
    this.x = g / 2;
    this.y = g / 2;
    this.diameter = g * 0.75;
    this.straal = this.diameter / 2;
    this.snelheid = 0;
    this.kleur = 'green';
  }
  
  teken() {
      push();
      noStroke();
      fill(this.kleur);
      ellipse(this.x,this.y,this.diameter);
      fill(255);
      textSize(10);
      text(this.x+' '+this.y,this.x,this.y);
      pop();
  }

}
/*  **********************************************************
    **      EINDE klasse Cirkel   BEGIN hoofdprogramma      **
    ********************************************************** */

class Cel {
  constructor(x,y,l) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.kleur = 0;
    this.tekstKleur = 127;
  }
  
  wordtGeraakt(s) {
    if (s.x + s.straal > this.x && s.x - s.straal < this.x + this.l && s.y + s.straal > this.y && s.y - s.straal < this.y + this.l) {
      this.tekstKleur = 'orange';
    }
    else {
      this.tekstKleur = 127;
    }
  }
  
  teken() {
    push();
    fill(this.kleur);
    noStroke();
    rect(this.x,this.y,this.l,this.l);
    fill(this.tekstKleur);
    text(this.x+' '+this.y,this.x,this.y,this.l,this.l);
    pop();
  }
}

var myCanvas;
var rooster = [];
var patroon = [1,1,0,0,0,0,0,
               0,1,0,1,1,1,0,
               0,1,1,1,0,1,0,
               0,0,0,0,0,1,1];
               
var grootte = 100;

function setup() {
  // initialisatie
  
  myCanvas = createCanvas(700,400);
  myCanvas.parent('processing');
  textFont("Monospace");
  textSize(20); 
  textAlign(CENTER,CENTER);
  fill('black');
  speler = new Cirkel(grootte);
  for (var rij = 0; rij < myCanvas.height / grootte; rij++) {
    for (var kolom = 0; kolom < myCanvas.width / grootte; kolom++) {
      rooster.push(new Cel(kolom*grootte,rij*grootte,grootte));
    }
  }
  for (var c = 0; c < rooster.length; c++) {
    if (patroon[c] == 1) {
      rooster[c].kleur = 255;
    }
  }
  for (var r = 0; r < rooster.length; r++) {
    rooster[r].wordtGeraakt(speler);
    rooster[r].teken();
  }  
  speler.teken();  
}

function draw() {

}

function touchStarted() {

  return false;
}

function touchMoved() {
  speler.x = constrain(touches[0].x,speler.straal, myCanvas.width + speler.diameter);
  speler.y = constrain(touches[0].y,speler.straal, myCanvas.height - speler.straal);
  for (var r = 0; r < rooster.length; r++) {
    rooster[r].wordtGeraakt(speler);
    rooster[r].teken();
  }  
  speler.teken();
}

function touchEnded() {

  return false;
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */